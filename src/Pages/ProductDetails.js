import { useParams} from 'react-router-dom'


const ProductDetails = ()=>{
    const params = useParams();

    return (
    <section>
        <h2>Product details</h2>
    <p>{params.productId}</p>
    </section>
    )
}

export default ProductDetails;