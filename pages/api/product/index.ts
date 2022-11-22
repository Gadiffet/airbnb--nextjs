import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../model/product';
import products from '../../../mockup/product.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
	return res.status(200).json(products);
}
