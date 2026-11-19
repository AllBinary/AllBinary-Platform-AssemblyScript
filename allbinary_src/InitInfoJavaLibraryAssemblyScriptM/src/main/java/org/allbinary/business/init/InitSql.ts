/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.business.init
// import java.sql.Connection
// import java.sql.DriverManager
// import java.sql.ResultSet
// import java.sql.ResultSetMetaData
// import java.sql.SQLException
// import java.sql.Statement
// import java.util.HashMap
// import java.util.Set
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.business.init.db.DatabaseConnectionInfoInterface
// import org.allbinary.business.init.db.DbConnectionInfo
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.communication.sql.SqlStrings
// import org.allbinary.logic.communication.sql.SqlTypeStrings
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class InitSql extends JObject {

    jclassName(): string {
        return "org.allbinary.business.init.InitSql";
    }
    stringUtil: StringUtil | null = null;
    commonSeps: CommonSeps | null = null;
    sqlTypeStrings: SqlTypeStrings | null = null;
    sqlStrings: SqlStrings | null = null;
    stdUtil: StdUtil | null = null;
    INSERT: string | null = null;
    UPDATE: string | null = null;
    databaseConnectionInfoInterface: DbConnectionInfo | null = null;
    userid: string | null = null;
    password: string | null = null;
    tableName: string | null = null;
    conn: Connection | null = null;
    useridAndPassword: bool = false;
    SUCCESS_SQL_STATEMENT: string | null = null;
    FAILED_SQL_STATEMENT: string | null = null;
    INIT_SQL: string | null = null;
    commonStrings: CommonStrings | null = null;
    EQUAL_QUOTE: string | null = null;
    METHOD_GET_ROW: string | null = null;
    METHOD_UPDATE_WHERE: string | null = null;
    ROW_VALUE_LABEL: string | null = null;
    NO_RESULTS_IN_RESULT_SET: string | null = null;
    INSERT_END: string | null = null;

    jfields_InitSql(): void {
    this.stringUtil = StringUtil.getInstance();
    this.commonSeps = CommonSeps.getInstance();
    this.sqlTypeStrings = SqlTypeStrings.getInstance();
    this.sqlStrings = SqlStrings.getInstance();
    this.stdUtil = StdUtil.getInstance();
    this.INSERT = "insert";
    this.UPDATE = "update";
    this.databaseConnectionInfoInterface = null;
    this.userid = null;
    this.password = null;
    this.tableName = null;
    this.conn = null;
    this.useridAndPassword = false;
    this.SUCCESS_SQL_STATEMENT = "Success\nSQL Statement: ";
    this.FAILED_SQL_STATEMENT = "Failed\nSQL Statement: ";
    this.INIT_SQL = "InitSql";
    this.commonStrings = CommonStrings.getInstance();
    this.EQUAL_QUOTE = "=\"";
    this.METHOD_GET_ROW = "getRow()";
    this.METHOD_UPDATE_WHERE = "updateWhere()";
    this.ROW_VALUE_LABEL = "Row Value: ";
    this.NO_RESULTS_IN_RESULT_SET = "No Results in ResultSet";
    this.INSERT_END = "')";
    }
    

    jinit_InitSql_1(databaseConnectionInfoInterface: DbConnectionInfo | null): InitSql {
        super.jinit_JObject_0();
        this.jfields_InitSql();
        this.setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setTable(tableName: string | null): void {
        this.tableName = tableName;
    }
    

    setDatabaseConnectionInfoInterface(databaseConnectionInfoInterface: DbConnectionInfo | null): void {
        this.databaseConnectionInfoInterface = databaseConnectionInfoInterface;
    }
    

    createTable(tableData: string | null): bool {
        do {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            stringBuffer!.append("Creating Table: "); if (JThrowable.pending !== null) break;
            stringBuffer!.append(tableData); if (JThrowable.pending !== null) break;
            PreLogUtil.put(JObject.jtoString(stringBuffer), this.INIT_SQL, "createTable()"); if (JThrowable.pending !== null) break;
            this.executeSQLStatement(tableData); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "createTable()", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    dropTable(): bool {
        let sqlStatement: string | null = jstr(this.sqlStrings!.DROP_TABLE) + jstr(this.tableName);
        do {
            this.executeSQLStatement(sqlStatement); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "dropTables()", e); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getRow(keysAndValues: JHashMap | null): JHashMap | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.sqlStrings!.SELECT_ALL_FROM); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.tableName); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.sqlStrings!.WHERE); if (JThrowable.pending !== null) return null;
        do {
            let result: JHashMap | null = null;
            let set: JSet | null = keysAndValues!.keySet(); if (JThrowable.pending !== null) break;
            let keyArray: StaticArray<Object | null> | null = set!.toArray(); if (JThrowable.pending !== null) break;
            let size: i32 = keyArray!.length;
            for (let i: i32 = 0; i < size; i++) {
                let key: string | null = changetype<string | null>(keyArray![i]);
                let value: string | null = JString.new1(changetype<string | null>(keysAndValues!.get(key))); if (JThrowable.pending !== null) break;
                stringBuffer!.append(key); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.getValue(value)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE); if (JThrowable.pending !== null) break;
                if (i < size - 1) {
                    stringBuffer!.append(this.sqlStrings!.AND); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let sqlStatement: string | null = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGING)) {
                PreLogUtil.put(jstr(this.sqlStrings!.SQL_STATEMENT_LABEL) + jstr(sqlStatement), this.INIT_SQL, this.METHOD_GET_ROW); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let rset: ResultSet | null = this.executeSQLStatement(sqlStatement); if (JThrowable.pending !== null) break;
            let resultSetMetaData: ResultSetMetaData | null = rset!.getMetaData(); if (JThrowable.pending !== null) break;
            while (rset!.next()) {
                result = this.stdUtil!.createHashMap(); if (JThrowable.pending !== null) break;
                let columnCount: i32 = resultSetMetaData!.getColumnCount(); if (JThrowable.pending !== null) break;
                for (let index: i32 = 1; index <= columnCount; index++) {
                    let columnName: string | null = resultSetMetaData!.getColumnName(index); if (JThrowable.pending !== null) break;
                    let field: string | null = rset!.getString(columnName); if (JThrowable.pending !== null) break;
                    result!.put(columnName, field); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGING)) {
                    PreLogUtil.put(jstr(this.ROW_VALUE_LABEL) + jstr(JObject.jtoString(result)), this.INIT_SQL, this.METHOD_GET_ROW); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                return result;
            } if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.put(this.NO_RESULTS_IN_RESULT_SET, this.INIT_SQL, this.METHOD_GET_ROW); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return null;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(jstr(this.FAILED_SQL_STATEMENT) + jstr(stringBuffer), this.INIT_SQL, this.METHOD_GET_ROW, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    updateWhere(key: string | null, value: string | null, updatedKeyValuePairs: JHashMap | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.sqlStrings!.UPDATE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.tableName); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.sqlStrings!.SET); if (JThrowable.pending !== null) return;
        do {
            let columnArray: StaticArray<Object | null> | null = updatedKeyValuePairs!.keySet()!.toArray(); if (JThrowable.pending !== null) break;
            let size: i32 = columnArray!.length;
            for (let i: i32 = 0; i < size; i++) {
                let columnName: string | null = JObject.jtoString(columnArray![i]); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.commonSeps!.SPACE); if (JThrowable.pending !== null) break;
                stringBuffer!.append(columnName); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.EQUAL_QUOTE); if (JThrowable.pending !== null) break;
                let columnValue: string | null = changetype<string | null>(updatedKeyValuePairs!.get(columnName)); if (JThrowable.pending !== null) break;
                if (columnValue == null) {
                    columnValue = this.stringUtil!.EMPTY_STRING;
                } else {
                }
                stringBuffer!.append(this.getValue(columnValue)); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE); if (JThrowable.pending !== null) break;
                if (i < size - 1) {
                    stringBuffer!.append(this.commonSeps!.COMMA); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.sqlStrings!.WHERE); if (JThrowable.pending !== null) break;
            stringBuffer!.append(key); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.sqlStrings!.EQUAL_QUOTE); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.getValue(value)); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.sqlStrings!.CLOSE_QUOTE); if (JThrowable.pending !== null) break;
            let sqlStatement: string | null = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) break;
            this.executeSQLStatement(sqlStatement); if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGING)) {
                PreLogUtil.put(jstr(this.SUCCESS_SQL_STATEMENT) + jstr(sqlStatement), this.INIT_SQL, this.METHOD_UPDATE_WHERE); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(jstr(this.FAILED_SQL_STATEMENT) + jstr(stringBuffer), this.INIT_SQL, this.METHOD_UPDATE_WHERE, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    insert(values: BasicArrayList | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.sqlStrings!.INSERT_INTO); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.tableName); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.sqlStrings!.VALUES); if (JThrowable.pending !== null) return;
        do {
            let size: i32 = values!.size(); if (JThrowable.pending !== null) break;
            for (let i: i32 = 0; i < size - 1; i++) {
                let value: string | null = this.getValue(changetype<string | null>(values!.get(i))); if (JThrowable.pending !== null) break;
                stringBuffer!.append(value); if (JThrowable.pending !== null) break;
                stringBuffer!.append(this.sqlStrings!.SINGLE_QUOTE_COMMA_SEP); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let value: string | null = this.getValue(changetype<string | null>(values!.get(values!.size() - 1))); if (JThrowable.pending !== null) break;
            stringBuffer!.append(value); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.INSERT_END); if (JThrowable.pending !== null) break;
            let sqlStatement: string | null = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) break;
            this.executeSQLStatement(sqlStatement); if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGING)) {
                PreLogUtil.put(jstr(this.SUCCESS_SQL_STATEMENT) + jstr(sqlStatement), this.INIT_SQL, this.INSERT); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(jstr(this.FAILED_SQL_STATEMENT) + jstr(JObject.jtoString(stringBuffer)), this.INIT_SQL, this.INSERT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getValue(value: string | null): string | null {
        if (StringValidationUtil.getInstance()!.isEmpty(value)) {
            return this.stringUtil!.EMPTY_STRING;
        } else {
            return value;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    executeSQLStatement(statement: string | null): ResultSet | null {
        do {
            if (this.conn == null) {
                this.initialize(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let stmt: Statement | null = this.conn!.createStatement(); if (JThrowable.pending !== null) break;
            stmt!.execute(statement); if (JThrowable.pending !== null) break;
            let rset: ResultSet | null = stmt!.getResultSet(); if (JThrowable.pending !== null) break;
            stmt!.close(); if (JThrowable.pending !== null) break;
            return rset;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof SQLException) {
            let e: SQLException | null = changetype<SQLException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "executeSQLStatement()", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(e); return null; }
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "executeSQLStatement()", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    createConnection(): void {
        do {
            if (this.useridAndPassword == true) {
                this.conn = DriverManager.getConnection(this.databaseConnectionInfoInterface!.getUrl(), this.userid, this.password); if (JThrowable.pending !== null) break;
            } else {
                this.conn = DriverManager.getConnection(this.databaseConnectionInfoInterface!.getUrl()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof SQLException) {
            let se: SQLException | null = changetype<SQLException | null>(JThrowable.take());
            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "createConnection()", se); if (JThrowable.pending !== null) return;
            { JThrowable.raise(se); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    initialize(): void {
        do {
            do {
                let jdbcDriver: string | null = this.databaseConnectionInfoInterface!.getJdbcDriver(); if (JThrowable.pending !== null) break;
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Loading DbConnnectionInfo: ")!.append(JObject.jclassOf(this.databaseConnectionInfoInterface)!.getName())!.append(" Driver: ")!.append(jdbcDriver)), this.INIT_SQL, "initialize()"); if (JThrowable.pending !== null) break;
                JClass.forName(jdbcDriver)!.newInstance(); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                    PreLogUtil.putOE(jstr("LoadDriver Failed: ") + jstr(this.databaseConnectionInfoInterface!.getJdbcDriver()), this.INIT_SQL, "initialize()", e); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                { JThrowable.raise(e); break; }
            } if (JThrowable.pending !== null) break;
            if (this.userid == null && this.password == null) {
                this.useridAndPassword = true;
            }
            this.createConnection(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let se: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.SQLLOGGINGERROR)) {
                PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.INIT_SQL, "initialize()", se); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            { JThrowable.raise(se); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    getDatabaseConnectionInfoInterface(): DatabaseConnectionInfoInterface | null {
        return this.databaseConnectionInfoInterface;
    }
}

