import sql from 'mssql';
import { QueryDB } from '@src/services/diary/interface';
import { DiaryField, DiaryBodyField } from '@src/dataStruct/diary';

interface TotalCountField {
    totalCount: number;
}

type DiaryQueryResult = {
    recordsets: [DiaryField[], TotalCountField[]];
    recordset: DiaryField[]; // tập đầu tiên
    rowsAffected: number[];
    output: Record<string, unknown>;
};

class QueryDB_GetDiarys extends QueryDB {
    private _connectionPool: sql.ConnectionPool | undefined;
    private _diaryBody: DiaryBodyField | undefined;

    constructor() {
        super();
    }

    set_connection_pool(connectionPool: sql.ConnectionPool): void {
        this._connectionPool = connectionPool;
    }

    setDiaryBody(diaryBody: DiaryBodyField): void {
        this._diaryBody = diaryBody;
    }

    async run(): Promise<DiaryQueryResult | void> {
        if (this._connectionPool !== undefined && this._diaryBody !== undefined) {
            try {
                const accountId = this._diaryBody.accountId ? this._diaryBody.accountId : null;

                const result = await this._connectionPool
                    .request()
                    .input('page', sql.Int, this._diaryBody.page)
                    .input('size', sql.Int, this._diaryBody.size)
                    .input('accountId', sql.Int, accountId)
                    .execute('GetDiarys');

                return result as unknown as DiaryQueryResult;
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default QueryDB_GetDiarys;
