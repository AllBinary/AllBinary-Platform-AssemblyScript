// Generated Code Do Not Modify
// package org.allbinary.logic.communication.sql
// import org.allbinary.string.CommonSeps

@global export class SqlStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.sql.SqlStrings";
    }
    @lazy static jv_instance: SqlStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SqlStrings | null {
        if (!SqlStrings.js_instance) {
            SqlStrings.js_instance = true;
            SqlStrings.jv_instance = new SqlStrings().jinit_SqlStrings_0();
        }
        return SqlStrings.jv_instance;
    }
    static set instance(value: SqlStrings | null) {
        SqlStrings.js_instance = true;
        SqlStrings.jv_instance = value;
    }
    CREATE_DATABASE: string | null = null;
    DROP_TABLE: string | null = null;
    CREATE_TABLE: string | null = null;
    START: string | null = null;
    SELECT: string | null = null;
    FROM: string | null = null;
    SELECT_ALL: string | null = null;
    WHERE: string | null = null;
    AND: string | null = null;
    UPDATE: string | null = null;
    SET: string | null = null;
    SELECT_ALL_FROM: string | null = null;
    DELETE: string | null = null;
    LIKE_QUOTE: string | null = null;
    INSERT_INTO: string | null = null;
    VALUES: string | null = null;
    ORDER_BY: string | null = null;
    COUNT: string | null = null;
    ASC: string | null = null;
    DESC: string | null = null;
    PRIMARY_KEY: string | null = null;
    END: string | null = null;
    EQUAL_QUOTE: string | null = null;
    CLOSE_QUOTE: string | null = null;
    EQUAL_QUOTE_NO_SPACE: string | null = null;
    ESCAPE: string | null = null;
    DOUBLE_ESCAPE: string | null = null;
    MORE_THAN_QUOTE: string | null = null;
    LESS_THAN_QUOTE: string | null = null;
    SINGLE_QUOTE_COMMA_SEP: string | null = null;
    ID: string | null = null;
    SQL_STATEMENT_LABEL: string | null = null;
    COLUMN_VALUE: string | null = null;
    CREATE_RETURN: string | null = null;
    FIELD_VALUE: string | null = null;

    jfields_SqlStrings(): void {
    this.CREATE_DATABASE = "CREATE DATABASE ";
    this.DROP_TABLE = "DROP TABLE ";
    this.CREATE_TABLE = "CREATE TABLE ";
    this.START = " (";
    this.SELECT = "SELECT ";
    this.FROM = " FROM ";
    this.SELECT_ALL = "SELECT *";
    this.WHERE = " WHERE ";
    this.AND = " AND ";
    this.UPDATE = "UPDATE ";
    this.SET = " SET ";
    this.SELECT_ALL_FROM = jstr(this.SELECT_ALL) + jstr(this.FROM);
    this.DELETE = "DELETE";
    this.LIKE_QUOTE = " LIKE \"";
    this.INSERT_INTO = "INSERT INTO ";
    this.VALUES = " VALUES ('";
    this.ORDER_BY = "ORDER BY";
    this.COUNT = "COUNT(";
    this.ASC = "ASC";
    this.DESC = "DESC";
    this.PRIMARY_KEY = "PRIMARY KEY(";
    this.END = ") )";
    this.EQUAL_QUOTE = " = \"";
    this.CLOSE_QUOTE = CommonSeps.getInstance()!.QUOTE;
    this.EQUAL_QUOTE_NO_SPACE = "=\"";
    this.ESCAPE = "\\";
    this.DOUBLE_ESCAPE = "\\\\";
    this.MORE_THAN_QUOTE = " > \"";
    this.LESS_THAN_QUOTE = " < \"";
    this.SINGLE_QUOTE_COMMA_SEP = "','";
    this.ID = "ID";
    this.SQL_STATEMENT_LABEL = "SQL Statement: ";
    this.COLUMN_VALUE = "\nColumn Value: ";
    this.CREATE_RETURN = " Created Successfully";
    this.FIELD_VALUE = "\nField Value: ";
    }

    jinit_SqlStrings_0(): SqlStrings {
        super.jinit_JObject_0();
        this.jfields_SqlStrings();
        return this;
    }
    

    static getInstance(): SqlStrings | null {
        return SqlStrings.instance;
    }
}

