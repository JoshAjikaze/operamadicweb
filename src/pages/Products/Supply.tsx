import SmallHeader from "components/SmHeader/SmallHeader"
import Tabs from "components/Tabs/Tabs"
const mytxt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent 
semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent  semper feugiat. Donec ac odio tempor orci dapibus ultrices in.`
function Product() {
    return (
        <div className="min-h-[80vh] pt-[10vh]">
            <SmallHeader pagetitle="Supply Chain Management" header="Overview" textContent={mytxt} textJustify='justify' />
            <div className="container mx-auto">
                <Tabs />
            </div>
        </div>
    )
}

export default Product