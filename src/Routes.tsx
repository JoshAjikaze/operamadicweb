import Solutions from 'components/Others/Solutions';
import Banner from 'components/banner/Banner';
import Pricing from 'pages/Pricing/Pricing';
import Product from 'pages/Products/Supply';
import Index from 'pages/home/Index';
import { Routes, Route } from 'react-router-dom';

export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route path="home" index element={<div><Banner /><Solutions /></div>}/>
                    <Route path="products" element={<Product />}/>
                    <Route path="pricing" element={<Pricing />}/>
                    <Route path="*" element={<div>404</div>}/>
                </Route>
            </Routes>

        </>
    )
}
