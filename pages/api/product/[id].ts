import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../model/product';
import products from '../../../mockup/product.json';

type ResponseError = {
	message: string;
};

export default function productHandler(req: NextApiRequest, res: NextApiResponse<Product | ResponseError>) {
	const { query } = req;
	const { id } = query;
	const product = products.filter(p => p.id === id);
	return product.length != 0
		? res.status(200).json(product[0])
		: res.status(404).json({ message: `product with ${id} not found` });
}
