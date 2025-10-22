import sql from 'mssql';
import { MutateDB } from '@src/services/medication/interface';
import { MedicationField, CreateMedicationField } from '@src/dataStruct/medication';

class MutateDB_CreateMedication extends MutateDB {
    private _connectionPool: sql.ConnectionPool | undefined;
    private _createMedicationOption: CreateMedicationField | undefined;

    constructor() {
        super();
    }

    set_connection_pool(connectionPool: sql.ConnectionPool): void {
        this._connectionPool = connectionPool;
    }

    set_createMedicationBody(createMedicationBody: CreateMedicationField): void {
        this._createMedicationOption = createMedicationBody;
    }

    async run(): Promise<sql.IProcedureResult<MedicationField> | undefined> {
        if (this._connectionPool !== undefined && this._createMedicationOption !== undefined) {
            try {
                const result = await this._connectionPool
                    .request()
                    // .input("label", sql.NVarChar(255), this._buyNowBody.order.label)
                    // .input("total", sql.NVarChar(255), this._buyNowBody.order.total)
                    // .input("note", sql.NVarChar(255), this._buyNowBody.order.note)
                    // .input("userId", sql.Int, this._buyNowBody.order.userId)
                    // .input("title", sql.NVarChar(255), this._buyNowBody.product.title)
                    // .input("image", sql.NVarChar(255), this._buyNowBody.product.image)
                    // .input("name", sql.NVarChar(255), this._buyNowBody.product.name)
                    // .input("size", sql.NVarChar(255), this._buyNowBody.product.size)
                    // .input("amount", sql.NVarChar(255), this._buyNowBody.product.amount)
                    // .input("discount", sql.NVarChar(255), this._buyNowBody.product.discount)
                    // .input("fishCodeInProduct", sql.NVarChar(255), this._buyNowBody.product.fishCodeInProduct)
                    // .input("price", sql.NVarChar(255), this._buyNowBody.product.price)
                    // .input("productId", sql.Int, this._buyNowBody.product.productId)
                    // .input("sellerId", sql.Int, this._buyNowBody.product.sellerId)
                    // .input("paymentMethod", sql.NVarChar(255), this._buyNowBody.payment.method)
                    // .input("paymentInfo", sql.NVarChar(sql.MAX), this._buyNowBody.payment.infor)
                    // .input("isPay", sql.Bit, this._buyNowBody.payment.isPay)
                    // .input("myName", sql.NVarChar(100), this._buyNowBody.contact.name)
                    // .input("myPhone", sql.NVarChar(15), this._buyNowBody.contact.phone)
                    // .input("address", sql.Bit, this._buyNowBody.contact.address)
                    // .input("contactId", sql.Int, this._buyNowBody.contact.contactId)
                    .execute('CreateMedication');

                return result;
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default MutateDB_CreateMedication;
