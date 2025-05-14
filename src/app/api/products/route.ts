import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
  
    const { searchParams } = request.nextUrl;
  
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '6', 10);
    const skip = (page - 1) * limit;
    const search = searchParams.get('search');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const sortParam = searchParams.get('sort'); // ex: price_asc
  
    const filter: any = {};
  
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }
  
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
  
    const sortOption: any = {};
    if (sortParam) {
      const [field, direction] = sortParam.split('_');
      sortOption[field] = direction === 'desc' ? -1 : 1;
    }

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter).sort(sortOption).skip(skip).limit(limit);

    return NextResponse.json({
      data: products,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar produtos: ' + error.toString() }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
          body.price = parseFloat(body.price || "0")
          
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar produto' }, { status: 500 });
  }
}
