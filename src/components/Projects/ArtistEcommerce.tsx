import manageProducts from "../../assets/manage-products.png";
import viewOrders from "../../assets/view-orders.png";

const ArtistEcommerce = () => {
    return (
        <div>
            <h3>Artist E-commerce (in progress)</h3>
            <img src={manageProducts} width={420} alt="Manage products page on artist e-commerce website" />
            <img src={viewOrders} width={420} alt="View orders page on artist e-commerce website" />

            <ul>
                <li>Full stack e-commerce website for the works of an artist.</li>
                <li>React 19, TypeScript, Node, Express, MongoDB</li>
                <li>Multi-language translation</li>
                <li>Braintree payment integration</li>
                <li>Admin dashboard & user dashboard</li>
                <li>Product images stored on Cloudfare & cached</li>
            </ul>
           </div>
    )
}

export default ArtistEcommerce;