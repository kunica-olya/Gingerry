import styles from './ModalView.module.scss';
import {ButtonView} from "../../../components/Button/ButtonView";
import {BUTTON} from "../../../constants/constants";
import {useTranslation} from "react-i18next";

export const ModalView = ({children, close, changeInput, formReady}) => {

    const {t} = useTranslation();

    return (
        <div className={styles['modal-window']}>
            <div className={styles['modal-content']}></div>
            <div onClick={close} className={styles['close-icon']}>
                {children}
            </div>
            <h2>{t('orderTablePage.modalTitle')}</h2>
            <form>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div>
                            <label htmlFor="id">ID</label>
                            <input onChange={changeInput} id='id' type="text"/>
                        </div>
                        <div>
                            <label htmlFor="firstName">{t('orderTablePage.modalFirstName')}</label>
                            <input onChange={changeInput} id="firstName" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="lastName">{t('orderTablePage.modalLastName')}</label>
                            <input onChange={changeInput} id="lastName" type="text"/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div>
                            <label htmlFor="productName">{t('orderTablePage.modalProduct')}</label>
                            <input onChange={changeInput} id="productName" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="productPrice">{t('orderTablePage.modalPrice')}</label>
                            <input onChange={changeInput} id="productPrice" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="productAmount">{t('orderTablePage.modalAmount')}</label>
                            <input onChange={changeInput} id="productAmount" type="text"/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <ButtonView text={t('orderTablePage.modalButtonCancel')}
                                click={close}
                                variant={BUTTON.CANCEL}
                                className={'different'}
                    />
                    <ButtonView text={t('orderTablePage.modalButtonSave')}
                                click={formReady}
                                variant={BUTTON.SAVE}
                    />
                </div>
            </form>
        </div>
    )
}