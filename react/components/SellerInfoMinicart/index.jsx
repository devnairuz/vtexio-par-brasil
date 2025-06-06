import { useEffect, useState } from 'react';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import api from '../../services/axios';

const SellerInfoMinicart = () => {
    const orderFormContext = useOrderForm();
    const [hasExecuted, setHasExecuted] = useState(false);

    if (!orderFormContext.orderForm?.items?.length) return null;

    useEffect(() => {
        let isMounted = true; // Variável para verificar se o componente está montado

        const updateOrderForm = async () => {
            if (orderFormContext && orderFormContext.orderForm && orderFormContext.orderForm.items && !hasExecuted) {
                try {
                    const items = orderFormContext.orderForm.items;
    
                    const orderFormResponse = await api.get('/api/checkout/pub/orderForm');
                    const sellers = orderFormResponse.data.sellers;
    
                    let updatedItems = items.map((item) => {
                        console.log('aqui')
                        if (sellers?.length === 1 && item.seller === sellers[0].id) {
                            return {
                                ...item,
                                additionalInfo: {
                                    brandName: sellers[0].name,
                                },
                            };
                        }
                        return item;
                    });
    
                    console.log('updatedItems', updatedItems);
                    console.log('orderFormContext', orderFormContext);
                    console.log('sellers', sellers);
    
                    if (isMounted) {
                        // Apenas atualiza o estado se o componente ainda estiver montado
                        orderFormContext.setOrderForm({
                            ...orderFormContext.orderForm,
                            items: updatedItems,
                        });
                        setHasExecuted(true);
                    }
                } catch (error) {
                    if (isMounted) {
                        console.error('Erro ao atualizar o OrderForm:', error);
                    }
                }
            }
        };

        updateOrderForm();

        // Cleanup para evitar atualizações após desmontagem
        return () => {
            isMounted = false;
        };
    }, [orderFormContext, hasExecuted]);

    return null;
};

export default SellerInfoMinicart;
