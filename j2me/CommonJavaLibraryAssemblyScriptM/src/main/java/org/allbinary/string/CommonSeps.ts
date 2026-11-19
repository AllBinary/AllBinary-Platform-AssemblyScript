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
// package org.allbinary.string
// import jsinterop.annotations.JsType
// import org.allbinary.logic.string.StringMaker
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class CommonSeps extends JObject {

    jclassName(): string {
        return "org.allbinary.string.CommonSeps";
    }
    @lazy static jv_instance: CommonSeps | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonSeps | null {
        if (!CommonSeps.js_instance) {
            CommonSeps.js_instance = true;
            CommonSeps.jv_instance = new CommonSeps().jinit_CommonSeps_0();
        }
        return CommonSeps.jv_instance;
    }
    static set instance(value: CommonSeps | null) {
        CommonSeps.js_instance = true;
        CommonSeps.jv_instance = value;
    }
    NEW_LINE: string | null = null;
    SEMICOLON: string | null = null;
    EQUALS: string | null = null;
    SPACE: string | null = null;
    COMMA: string | null = null;
    COLON: string | null = null;
    PERIOD: string | null = null;
    UNDERSCORE: string | null = null;
    COLON_SEP: string | null = null;
    COMMA_SEP: string | null = null;
    PARENTHESIS_OPEN: string | null = null;
    PARENTHESIS_CLOSE: string | null = null;
    BRACE_OPEN: string | null = null;
    BRACE_CLOSE: string | null = null;
    BRACKET_OPEN: string | null = null;
    BRACKET_CLOSE: string | null = null;
    DASH: string | null = null;
    PERCENT: string | null = null;
    AMPERSAND: string | null = null;
    FORWARD_SLASH: string | null = null;
    BACK_SLASH: string | null = null;
    QUESTION: string | null = null;
    QUOTE: string | null = null;
    QUOTE_END: string | null = null;
    COMMENT: string | null = null;
    INDENT: string | null = null;

    jfields_CommonSeps(): void {
    this.NEW_LINE = "\n";
    this.SEMICOLON = ";";
    this.EQUALS = "=";
    this.SPACE = " ";
    this.COMMA = ",";
    this.COLON = ":";
    this.PERIOD = ".";
    this.UNDERSCORE = "_";
    this.COLON_SEP = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.COLON)!.append(this.SPACE));
    this.COMMA_SEP = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.COMMA)!.append(this.SPACE));
    this.PARENTHESIS_OPEN = "(";
    this.PARENTHESIS_CLOSE = ")";
    this.BRACE_OPEN = "{";
    this.BRACE_CLOSE = "}";
    this.BRACKET_OPEN = "[";
    this.BRACKET_CLOSE = "]";
    this.DASH = "-";
    this.PERCENT = "%";
    this.AMPERSAND = "&";
    this.FORWARD_SLASH = "/";
    this.BACK_SLASH = "\\";
    this.QUESTION = "?";
    this.QUOTE = "\"";
    this.QUOTE_END = "\",";
    this.COMMENT = "//";
    this.INDENT = "    ";
    }

    jinit_CommonSeps_0(): CommonSeps {
        super.jinit_JObject_0();
        this.jfields_CommonSeps();
        return this;
    }
    

    static getInstance(): CommonSeps | null {
        return CommonSeps.instance;
    }
}

