import { useProduct } from 'vtex.product-context';
import styles from './seller.info.css';

const SellerInfo = () => {
    const productContext = useProduct();
    
    // Verifica se há vendedores para o item selecionado
    if (!productContext?.selectedItem?.sellers?.length) return null;

    const sellers = productContext?.selectedItem?.sellers;
    const sellerName = sellers[0]?.sellerName;

    // Verifica se existe um nome de vendedor e cria o link
    if (!sellerName) return null;

    // Link com apenas o nome do vendedor
    const sellerLink = `/search?v=1&query=${encodeURIComponent(sellerName)}`;

    return (
        <div className={`${styles.sellerContainer} vtex-nivelepoc-sellerInfo`}>
            <h3 className={`${styles.sellerName} vtex-nivelepoc-sellerLabel`}>
                Vendido por: 
                <a href={sellerLink} className="vtex-nivelepoc-sellerLink">
                    <strong className="vtex-nivelepoc-sellerName">{sellerName}</strong>
                </a>
            </h3>
        </div>
    );
};

export default SellerInfo;