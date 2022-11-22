import { Product } from '../../model/product';

interface productPageProps {
	product: Product;
}

export default function ProductPage({ product }: productPageProps) {
	return (
		<>
			<h2>{product.title}</h2>
			<img src={product.img} />
			<p>{product.description}</p>
			<p>{product.note}</p>
			<p>{product.prix}</p>
		</>
	);
}

export async function getServerSideProps(context: any) {
	console.log('ok');
	const { id } = context.query;
	const res = await fetch(`http://localhost:3000/api/product/${id}`);
	const product = await res.json();
	return {
		props: {
			product,
		}, // will be passed to the page component as props
	};
}
