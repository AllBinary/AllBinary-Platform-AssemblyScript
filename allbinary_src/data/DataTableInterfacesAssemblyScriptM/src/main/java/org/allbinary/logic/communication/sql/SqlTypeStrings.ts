// Generated Code Do Not Modify
// package org.allbinary.logic.communication.sql
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class SqlTypeStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.sql.SqlTypeStrings";
    }
    @lazy static jv_instance: SqlTypeStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SqlTypeStrings | null {
        if (!SqlTypeStrings.js_instance) {
            SqlTypeStrings.js_instance = true;
            SqlTypeStrings.jv_instance = new SqlTypeStrings().jinit_SqlTypeStrings_0();
        }
        return SqlTypeStrings.jv_instance;
    }
    static set instance(value: SqlTypeStrings | null) {
        SqlTypeStrings.js_instance = true;
        SqlTypeStrings.jv_instance = value;
    }
    CHAR_COLUMN: string | null = null;
    INT_COLUMN: string | null = null;
    MAX_SIZE: string | null = null;
    SIXTY_SIZE: string | null = null;
    NOT_NULL: string | null = null;
    ONE_SIZE: string | null = null;
    TWO_SIZE: string | null = null;
    THREE_SIZE: string | null = null;
    SIX_SIZE: string | null = null;
    ELEVEN_SIZE: string | null = null;
    TWELVE_SIZE: string | null = null;
    ONE_KB_CHAR_COLUMN: string | null = null;
    MAX_CHAR_COLUMN: string | null = null;
    MAX_CHAR_COLUMN_NOT_NULL: string | null = null;
    SIXTY_CHAR_COLUMN_NOT_NULL: string | null = null;
    ONE_CHAR_COLUMN_NOT_NULL: string | null = null;
    SIX_CHAR_COLUMN_NOT_NULL: string | null = null;
    TWELVE_CHAR_COLUMN_NOT_NULL: string | null = null;
    TWO_INT_NOT_NULL: string | null = null;
    THREE_INT_NOT_NULL: string | null = null;
    FOUR_INT_NOT_NULL: string | null = null;
    MAX_INT_NOT_NULL: string | null = null;
    MAX_INT_UNSIGNED: string | null = null;
    MAX_INT_UNSIGNED_NOT_NULL: string | null = null;
    MAX_BIG_INT_NOT_NULL: string | null = null;
    MAX_BIG_INT_UNSIGNED: string | null = null;
    MAX_BIG_INT_UNSIGNED_NOT_NULL: string | null = null;
    MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL: string | null = null;
    LONG_BLOB: string | null = null;
    BLOB: string | null = null;
    BLOB_NOT_NULL: string | null = null;

    jfields_SqlTypeStrings(): void {
    this.CHAR_COLUMN = "VARCHAR";
    this.INT_COLUMN = "VARCHAR";
    this.MAX_SIZE = "(255)";
    this.SIXTY_SIZE = "(60)";
    this.NOT_NULL = "NOT NULL";
    this.ONE_SIZE = "(1)";
    this.TWO_SIZE = "(2)";
    this.THREE_SIZE = "(3)";
    this.SIX_SIZE = "(6)";
    this.ELEVEN_SIZE = "(11)";
    this.TWELVE_SIZE = "(12)";
    this.ONE_KB_CHAR_COLUMN = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append("(1024)")!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.MAX_CHAR_COLUMN = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.MAX_SIZE)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.MAX_CHAR_COLUMN_NOT_NULL = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.MAX_SIZE)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.SIXTY_CHAR_COLUMN_NOT_NULL = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.SIXTY_SIZE)!.append(this.NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.ONE_CHAR_COLUMN_NOT_NULL = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.ONE_SIZE)!.append(this.NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.SIX_CHAR_COLUMN_NOT_NULL = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.SIX_SIZE)!.append(this.NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.TWELVE_CHAR_COLUMN_NOT_NULL = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.append(this.CHAR_COLUMN)!.append(this.TWELVE_SIZE)!.append(this.NOT_NULL)!.append(CommonSeps.getInstance()!.COMMA_SEP));
    this.TWO_INT_NOT_NULL = " INT(2) NOT NULL, ";
    this.THREE_INT_NOT_NULL = " INT(3) NOT NULL, ";
    this.FOUR_INT_NOT_NULL = " INT(4) NOT NULL, ";
    this.MAX_INT_NOT_NULL = " INT(11) NOT NULL, ";
    this.MAX_INT_UNSIGNED = " INT(11) UNSIGNED, ";
    this.MAX_INT_UNSIGNED_NOT_NULL = " INT(11) UNSIGNED NOT NULL, ";
    this.MAX_BIG_INT_NOT_NULL = " BIGINT(19) NOT NULL, ";
    this.MAX_BIG_INT_UNSIGNED = " BIGINT(19) UNSIGNED, ";
    this.MAX_BIG_INT_UNSIGNED_NOT_NULL = " BIGINT(19) UNSIGNED NOT NULL, ";
    this.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL = " BIGINT(19) UNSIGNED AUTO_INCREMENT NOT NULL,";
    this.LONG_BLOB = " LONGBLOB, ";
    this.BLOB = " BLOB, ";
    this.BLOB_NOT_NULL = " BLOB NOT NULL, ";
    }

    jinit_SqlTypeStrings_0(): SqlTypeStrings {
        super.jinit_JObject_0();
        this.jfields_SqlTypeStrings();
        return this;
    }
    

    static getInstance(): SqlTypeStrings | null {
        return SqlTypeStrings.instance;
    }
}

