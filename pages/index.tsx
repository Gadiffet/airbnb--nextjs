import { ProductCard } from '../components/card/productCard';
import { Product } from '../model/product';
import Link from 'next/link';

interface homeProps {
	products: Product[];
}

export default function Home({ products }: homeProps) {
	return (
		<>
			<div className={'home'}>
				{products.map(product => (
					<Link
						key={product.id}
						href={`/product/${product.id}`}
					>
						<ProductCard
							description={product.description}
							id={product.id}
							img={product.img}
							note={product.note}
							prix={product.prix}
							title={product.title}
						/>
					</Link>
				))}
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/product/');
	const products = await res.json();

	return {
		props: {
			products,
		}, // will be passed to the page component as props
	};
}
