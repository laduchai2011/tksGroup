import sql from 'mssql';
import { MutateDB } from '@src/services/diary/interface';
import { DiaryField, CreateDiaryBodyField } from '@src/dataStruct/diary';

class MutateDB_CreateDiary extends MutateDB {
    private _connectionPool: sql.ConnectionPool | undefined;
    private _createDiaryOption: CreateDiaryBodyField | undefined;

    constructor() {
        super();
    }

    set_connection_pool(connectionPool: sql.ConnectionPool): void {
        this._connectionPool = connectionPool;
    }

    set_createDiaryBody(createMedicationBody: CreateDiaryBodyField): void {
        this._createDiaryOption = createMedicationBody;
    }

    async run(): Promise<sql.IProcedureResult<DiaryField> | undefined> {
        if (this._connectionPool !== undefined && this._createDiaryOption !== undefined) {
            try {
                // ===== TẠO TVP (Table-Valued Parameter) =====
                const images = this._createDiaryOption.images;
                const tvpImage = new sql.Table('DiaryImageType');
                tvpImage.columns.add('url', sql.NVarChar(255));
                for (const img of images) {
                    tvpImage.rows.add(img.url);
                }
                const videos = this._createDiaryOption.videos;
                const tvpVideo = new sql.Table('DiaryVideoType');
                tvpVideo.columns.add('url', sql.NVarChar(255));
                for (const video of videos) {
                    tvpVideo.rows.add(video.url);
                }

                const result = await this._connectionPool
                    .request()
                    .input('title', sql.NVarChar(255), this._createDiaryOption.diary.title)
                    .input('accountId', sql.Int, this._createDiaryOption.diary.accountId)
                    .input('diaryImage', tvpImage)
                    .input('diaryVideo', tvpVideo)
                    .execute('CreateDiary');

                return result;
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default MutateDB_CreateDiary;
