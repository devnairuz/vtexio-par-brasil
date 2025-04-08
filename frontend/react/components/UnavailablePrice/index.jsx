import React, { useEffect, useState } from 'react';
import classes from './unavailable.css';
import { useProduct } from 'vtex.product-context';

const UnavailablePrice = () => {
  const { product } = useProduct(); // Contexto do produto
  const [price, setPrice] = useState(null);
  const [showPrice, setShowPrice] = useState(true); // Controle para exibir ou não o preço

  useEffect(() => {
    if (product?.items && product.items.length > 0) {
      const item = product.items[0]; // Acessando o primeiro item

      // Verificar se o produto está disponível
      const isOutOfStock = !item.isAvailable;

      if (isOutOfStock) {
        // Acessar o preço correto considerando as promoções e preço original
        let basePrice = item.sellers[0]?.commertialOffer?.ListPrice || item.sellers[0]?.commertialOffer?.Price;

        // Se encontrou preço, exibe ele
        if (basePrice) {
          setPrice(basePrice);  // Atualiza o estado com o preço encontrado
        } else {
          setPrice(null);  // Se não encontrar preço, mostra "indisponível"
        }
      } else {
        setPrice(null);  // Produto disponível, não exibe preço
      }
    }

    // Verificar se a classe "vtex-numeric-stepper__input numeric-stepper__input" está presente
    const numericStepperInput = document.querySelector('.vtex-numeric-stepper__input.numeric-stepper__input');
    if (numericStepperInput) {
      setShowPrice(false); // Se a classe estiver presente, não exibe o preço
    } else {
      setShowPrice(true); // Se não encontrar a classe, exibe o preço
    }
  }, [product]); // Dependência no produto, para reagir a mudanças no contexto

  // Função para formatar o preço com vírgula
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  return (
    <>
      {showPrice && (
        <div className={classes.controlesconde}>
          {price === null ? (
            <p className={classes.price}></p>  // Exibe a mensagem se o preço for null
          ) : (
            <p className={classes.price}>{formatPrice(price)}</p>  // Exibe o preço formatado com vírgula
          )}
        </div>
      )}
    </>
  );
};

export default UnavailablePrice;