import Query_Account from './account';

class Query_Mssql {
    constructor() {}

    account() {
        return new Query_Account();
    }
}

export default Query_Mssql;
