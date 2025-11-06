import { FC, memo, useState, useEffect } from 'react';
import style from './style.module.scss';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { SHOPPING_CART, ADD, SUB, CREATE_SHOPPING_CART } from '@src/const/text';
import { isPositiveInteger } from '@src/utility/string';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage, setShow_dialogCreateShoppingCart } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';
import Skeleton from '@src/component/Skeleton';
import { useGetAllShoppingCartsQuery, useAddMedicationToShoppingCartMutation } from '@src/redux/query/shoppingCartRTK';
import { ShoppingCartField, CreateShoppingCartMedicationBodyField } from '@src/dataStruct/shoppingCart';
import { MedicationField } from '@src/dataStruct/medication';

const ShoppingCart: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [amounts, setAmounts] = useState<number[]>([]);
    const [allShoppingCart, setAllShoppingCart] = useState<ShoppingCartField[]>([]);

    const [addMedicationToShoppingCart] = useAddMedicationToShoppingCartMutation();

    const {
        data: data_allShoppingCarts,
        // isFetching,
        isLoading: isLoading_allShoppingCarts,
        isError: isError_allShoppingCarts,
        error: error_allShoppingCarts,
    } = useGetAllShoppingCartsQuery({ accountId: -1 });
    useEffect(() => {
        if (isError_allShoppingCarts && error_allShoppingCarts) {
            console.error(error_allShoppingCarts);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Lấy dữ liệu KHÔNG thành công !',
                })
            );
        }
    }, [dispatch, isError_allShoppingCarts, error_allShoppingCarts]);
    useEffect(() => {
        // setIsLoading(isLoading_allShoppingCarts);
    }, [isLoading_allShoppingCarts]);
    useEffect(() => {
        const resData = data_allShoppingCarts;
        if (resData?.isSuccess && resData.data) {
            setAllShoppingCart(resData.data);
            const amounts1: number[] = [];
            for (let i: number = 0; i < resData.data.length; i++) {
                amounts1.push(0);
            }
            setAmounts(amounts1);
        }
    }, [data_allShoppingCarts]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>, data: ShoppingCartField) => {
        const value = e.target.value;
        const value1 = value.trim();
        const index = allShoppingCart.indexOf(data);

        if (isPositiveInteger(value1)) {
            const amounts1: number[] = [...amounts];
            amounts1[index] = Number(value1);
            setAmounts(amounts1);
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Số lượng nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handleAdd = (index: number) => {
        if (!data) return;
        const maxAmount = data.amount;
        const selectedAmount = amounts[index];
        if (selectedAmount < maxAmount) {
            const amounts1: number[] = [...amounts];
            amounts1[index] = amounts1[index] + 1;
            setAmounts(amounts1);
        }
    };

    const handleSub = (index: number) => {
        const selectedAmount = amounts[index];
        if (selectedAmount > 0) {
            const amounts1: number[] = [...amounts];
            amounts1[index] = amounts1[index] - 1;
            setAmounts(amounts1);
        }
    };

    const handleMoney = (index: number) => {
        if (!data) return;
        const selectedAmount = amounts[index];
        const allOldPrice = selectedAmount * data.price;
        const allDiscount = (allOldPrice * data.discount) / 100;
        const allNewPrice = allOldPrice - allDiscount;

        return {
            old: allOldPrice,
            new: allNewPrice,
        };
    };

    const handleAddMedicationToShoppingCart = (index: number) => {
        if (!data) return;
        const addMedicationToShoppingCartBody: CreateShoppingCartMedicationBodyField = {
            amount: amounts[index],
            discount: data.discount,
            price: data.price,
            medicationId: data.id,
            shoppingCartId: allShoppingCart[index].id,
        };

        addMedicationToShoppingCart(addMedicationToShoppingCartBody)
            .then((res) => {
                const resData = res.data;
                if (resData?.isSuccess && resData.data) {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Thêm sản phẩm vào giỏ hàng thành công !',
                        })
                    );
                } else {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Thêm sản phẩm vào giỏ hàng KHÔNG thành công !',
                        })
                    );
                }
            })
            .catch((err) => console.error(err));
    };

    const list_row = allShoppingCart.map((data, index) => {
        return isLoading ? (
            <Skeleton className={style.rowLoading} key={index} />
        ) : (
            <div className={style.row} key={index}>
                <div className={style.index}>{index}</div>
                <div className={style.title}>{data.name}</div>
                <div className={style.total}>{`${data.total} VND`}</div>
                <div className={style.amountCustom}>
                    <HiOutlineMinusSmall className={style.icon} onClick={() => handleSub(index)} title={SUB} />
                    <div className={style.inputContainer}>
                        <input value={amounts[index]} onChange={(e) => handleAmountChange(e, data)} />
                    </div>
                    <HiOutlinePlusSmall className={style.icon} onClick={() => handleAdd(index)} title={ADD} />
                </div>
                <div className={style.money}>
                    <div className={style.new}>{handleMoney(index)?.new}</div>
                    <div className={style.old}>{handleMoney(index)?.old}</div>
                    <div className={style.moneyType}>VND</div>
                </div>
                <div className={style.btnContainer}>
                    <div onClick={() => handleAddMedicationToShoppingCart(index)} title={ADD}>
                        {ADD}
                    </div>
                </div>
            </div>
        );
    });

    const handleShow = () => {
        dispatch(setShow_dialogCreateShoppingCart(true));
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.headerLoading} />
            ) : (
                <div className={style.header}>{SHOPPING_CART}</div>
            )}
            <div className={style.table}>
                <div className={style.rowContainer}>{list_row}</div>
                <div className={style.createContainer}>
                    <div className={style.createBtn} onClick={() => handleShow()} title={CREATE_SHOPPING_CART}>
                        {CREATE_SHOPPING_CART}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ShoppingCart);
