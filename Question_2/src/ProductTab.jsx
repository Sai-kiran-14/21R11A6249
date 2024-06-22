import Product from './Product';

export default function ProductTab(){
    let styles = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div style={styles}>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}