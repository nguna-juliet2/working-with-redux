import {Link} from 'react-router-dom'
const Products = ()=>{
    return (
    <section>
        <h2>page products</h2>
        <ul>
            <li>
                <Link to= '/products/p1'>A book</Link>
            </li>  
            <li>
                <Link to= '/products/p2'>A CARPET</Link>
            </li>  
            <li>
                <Link to= '/products/p3'>A bROOM</Link>
            </li>  
            <li>
                <Link to= '/products/p3'>A CAR</Link>
            </li>  
             
        </ul>
    </section>
    )
}

export default Products;