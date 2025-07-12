import { useState } from 'react';
import style from './style.module.scss';
import { SIGNIN, SIGNUP, ACCOUNT, PASSWORD, PHONE_NUMBER, FIRST_NAME, LAST_NAME } from '@src/const/text';
import { accountOption } from '@src/dataStruct';
import { account_field_type, account_enum } from './type';
import { isSpace, isFirstNumber, containsSpecialCharacters, isValidPhoneNumber } from '@src/utility/string';
import { useSignupMutation } from '@src/redux/query/accountRTK';
import { router_res_type } from '@src/interface';

const Signup = () => {
    const [account, setAccount] = useState<accountOption>({
        id: 0,
        userName: '',
        password: '',
        phone: '',
        firstName: '',
        lastName: '',
        avatar: null,
        status: '',
        updateTime: '',
    });
    const [userNameWarn, setUserNameWarn] = useState<string>('');
    const [passwordWarn, setPasswordWarn] = useState<string>('');
    const [phoneWarn, setPhoneWarn] = useState<string>('');
    const [firstNameWarn, setFirstNameWarn] = useState<string>('');
    const [lastNameWarn, setLastNameWarn] = useState<string>('');
    const [myRes, setMyRes] = useState<router_res_type | undefined>(undefined);

    const [signup] = useSignupMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: account_field_type) => {
        const value = e.target.value;
        checkString(value, field);
        switch (field) {
            case account_enum.USERNAME: {
                setAccount({ ...account, userName: value });
                break;
            }
            case account_enum.PASSWORD: {
                setAccount({ ...account, password: value });
                break;
            }
            case account_enum.PHONE: {
                setAccount({ ...account, phone: value });
                break;
            }
            case account_enum.FIRST_NAME: {
                setAccount({ ...account, firstName: value });
                break;
            }
            case account_enum.LAST_NAME: {
                setAccount({ ...account, lastName: value });
                break;
            }
            default: {
                break;
            }
        }
    };

    const checkString = (str: string, field: account_field_type) => {
        switch (field) {
            case account_enum.USERNAME: {
                if (isSpace(str)) {
                    setUserNameWarn('Không được có khoảng trắng !');
                } else if (isFirstNumber(str)) {
                    setUserNameWarn('Ký tự đầu tiên không được là số !');
                } else if (containsSpecialCharacters(str)) {
                    setUserNameWarn('Tên tài khoản không được chứa ký tự đặc biệt !');
                } else {
                    setUserNameWarn('');
                }
                break;
            }
            case account_enum.PASSWORD: {
                if (isSpace(str)) {
                    setPasswordWarn('Không được có khoảng trắng !');
                } else if (containsSpecialCharacters(str)) {
                    setPasswordWarn('Mật khẩu không được chứa ký tự đặc biệt !');
                } else {
                    setPasswordWarn('');
                }
                break;
            }
            case account_enum.PHONE: {
                if (isSpace(str)) {
                    setPhoneWarn('Không được có khoảng trắng !');
                } else if (containsSpecialCharacters(str)) {
                    setPhoneWarn('Số điện thoại không được chứa ký tự đặc biệt !');
                } else if (!isValidPhoneNumber(str)) {
                    setPhoneWarn('Không phải là số điện thoại !');
                } else {
                    setPhoneWarn('');
                }
                break;
            }
            case account_enum.FIRST_NAME: {
                if (containsSpecialCharacters(str)) {
                    setFirstNameWarn('Tên không được chứa ký tự đặc biệt !');
                } else {
                    setFirstNameWarn('');
                }
                break;
            }
            case account_enum.LAST_NAME: {
                if (containsSpecialCharacters(str)) {
                    setLastNameWarn('Tên không được chứa ký tự đặc biệt !');
                } else {
                    setLastNameWarn('');
                }
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleSignup = () => {
        signup(account)
            .then((res) => setMyRes(res.data))
            .catch((err) => console.error(err));
    };

    return (
        <div className={style.parent}>
            <div>
                <div>
                    <h3>{SIGNUP}</h3>
                </div>
                <div>
                    <div>
                        <div>{ACCOUNT}</div>
                        <div>
                            <input
                                type="text"
                                maxLength={100}
                                value={account.userName}
                                onChange={(e) => handleChange(e, account_enum.USERNAME)}
                            />
                            {userNameWarn.length > 0 && <p>{userNameWarn}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{PASSWORD}</div>
                        <div>
                            <input
                                type="text"
                                maxLength={100}
                                value={account.password}
                                onChange={(e) => handleChange(e, account_enum.PASSWORD)}
                            />
                            {passwordWarn.length > 0 && <p>{passwordWarn}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{PHONE_NUMBER}</div>
                        <div>
                            <input
                                type="text"
                                maxLength={15}
                                value={account.phone}
                                onChange={(e) => handleChange(e, account_enum.PHONE)}
                            />
                            {phoneWarn.length > 0 && <p>{phoneWarn}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{FIRST_NAME}</div>
                        <div>
                            <input
                                type="text"
                                maxLength={20}
                                value={account.firstName}
                                onChange={(e) => handleChange(e, account_enum.FIRST_NAME)}
                            />
                            {firstNameWarn.length > 0 && <p>{firstNameWarn}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{LAST_NAME}</div>
                        <div>
                            <input
                                type="text"
                                maxLength={20}
                                value={account.lastName}
                                onChange={(e) => handleChange(e, account_enum.LAST_NAME)}
                            />
                            {lastNameWarn.length > 0 && <p>{lastNameWarn}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleSignup()}>{SIGNUP}</button>
                </div>
                <div>{`${SIGNIN} !`}</div>
                {<div style={{ color: myRes?.status === 'error' ? 'red' : 'black' }}>{myRes?.message}</div>}
            </div>
        </div>
    );
};

export default Signup;
