/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.logic.communication.log.config.type
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

@global export class LogConfigTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory";
    }
    @lazy static jv_instance: LogConfigTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LogConfigTypeFactory | null {
        if (!LogConfigTypeFactory.js_instance) {
            LogConfigTypeFactory.js_instance = true;
            LogConfigTypeFactory.jv_instance = new LogConfigTypeFactory().jinit_LogConfigTypeFactory_0();
        }
        return LogConfigTypeFactory.jv_instance;
    }
    static set instance(value: LogConfigTypeFactory | null) {
        LogConfigTypeFactory.js_instance = true;
        LogConfigTypeFactory.jv_instance = value;
    }
    NO_DESCRIPTION: string | null = null;
    AUTHENTICATION: LogConfigType | null = null;
    AUTHENTICATIONERROR: LogConfigType | null = null;
    CATEGORY: LogConfigType | null = null;
    CATEGORYERROR: LogConfigType | null = null;
    CRYPT: LogConfigType | null = null;
    CRYPTERROR: LogConfigType | null = null;
    EMAILLOGGING: LogConfigType | null = null;
    EMAILLOGGINGERROR: LogConfigType | null = null;
    ENTITYFACTORYERROR: LogConfigType | null = null;
    NETBEANS_MODULE: LogConfigType | null = null;
    NETBEANS_MODULE_ERROR: LogConfigType | null = null;
    FACTORYERROR: LogConfigType | null = null;
    FILE: LogConfigType | null = null;
    FILEERROR: LogConfigType | null = null;
    HTTP: LogConfigType | null = null;
    HTTPERROR: LogConfigType | null = null;
    HTTPREQUEST: LogConfigType | null = null;
    HTTPREQUESTERROR: LogConfigType | null = null;
    IDLOGGING: LogConfigType | null = null;
    JSPEXTRAOUTPUT: LogConfigType | null = null;
    JSPTAGEXTRAOUTPUT: LogConfigType | null = null;
    JSPTAG: LogConfigType | null = null;
    JSPTAGERROR: LogConfigType | null = null;
    LICENSING: LogConfigType | null = null;
    LICENSINGERROR: LogConfigType | null = null;
    LOADER: LogConfigType | null = null;
    LOADERERROR: LogConfigType | null = null;
    OS: LogConfigType | null = null;
    OSERROR: LogConfigType | null = null;
    PAYMENT: LogConfigType | null = null;
    PAYMENTERROR: LogConfigType | null = null;
    PRELOADER: LogConfigType | null = null;
    PRELOADERERROR: LogConfigType | null = null;
    PRODUCTSEARCHLOGGING: LogConfigType | null = null;
    PRODUCTSEARCHLOGGINGERROR: LogConfigType | null = null;
    SERVLET: LogConfigType | null = null;
    SERVLETERROR: LogConfigType | null = null;
    SHIPPINGERROR: LogConfigType | null = null;
    SQLLOGGINGERROR: LogConfigType | null = null;
    SQLLOGGING: LogConfigType | null = null;
    SQLTAGS: LogConfigType | null = null;
    SQLTAGSERROR: LogConfigType | null = null;
    STYLE: LogConfigType | null = null;
    STYLEERROR: LogConfigType | null = null;
    TAGHELPER: LogConfigType | null = null;
    TAGHELPERERROR: LogConfigType | null = null;
    TAGHELPERFACTORY: LogConfigType | null = null;
    TAGHELPERFACTORYERROR: LogConfigType | null = null;
    TAX: LogConfigType | null = null;
    TAXERROR: LogConfigType | null = null;
    VALIDATION: LogConfigType | null = null;
    VALIDATIONERROR: LogConfigType | null = null;
    VIEW: LogConfigType | null = null;
    VIEWERROR: LogConfigType | null = null;
    VIEWFACTORYERROR: LogConfigType | null = null;
    WORKFLOW: LogConfigType | null = null;
    WORKFLOWERROR: LogConfigType | null = null;
    XMLLOGGING: LogConfigType | null = null;
    XMLLOGGINGERROR: LogConfigType | null = null;
    XSLLOGGING: LogConfigType | null = null;
    XSLLOGGINGERROR: LogConfigType | null = null;
    REPLACE: LogConfigType | null = null;
    REPLACE_INFO: LogConfigType | null = null;
    REPLACEERROR: LogConfigType | null = null;
    SQLLOGGINGPOOL: LogConfigType | null = null;
    SQLLOGGINGPOOLERROR: LogConfigType | null = null;
    STATICPAGEGENERATIONLOGGING: LogConfigType | null = null;
    STATICPAGEGENERATIONLOGGINGERROR: LogConfigType | null = null;

    jfields_LogConfigTypeFactory(): void {
    this.NO_DESCRIPTION = "No Description";
    this.AUTHENTICATION = new LogConfigType().jinit_LogConfigType_2("Authentication", this.NO_DESCRIPTION);
    this.AUTHENTICATIONERROR = new LogConfigType().jinit_LogConfigType_2("Authentication Error", this.NO_DESCRIPTION);
    this.CATEGORY = new LogConfigType().jinit_LogConfigType_2("Category", this.NO_DESCRIPTION);
    this.CATEGORYERROR = new LogConfigType().jinit_LogConfigType_2("Category Error", this.NO_DESCRIPTION);
    this.CRYPT = new LogConfigType().jinit_LogConfigType_2("Crypt", this.NO_DESCRIPTION);
    this.CRYPTERROR = new LogConfigType().jinit_LogConfigType_2("Crypt Error", this.NO_DESCRIPTION);
    this.EMAILLOGGING = new LogConfigType().jinit_LogConfigType_2("Email", this.NO_DESCRIPTION);
    this.EMAILLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("Email Error", this.NO_DESCRIPTION);
    this.ENTITYFACTORYERROR = new LogConfigType().jinit_LogConfigType_2("Entity Factory Error", this.NO_DESCRIPTION);
    this.NETBEANS_MODULE = new LogConfigType().jinit_LogConfigType_2("NetBeans Module", this.NO_DESCRIPTION);
    this.NETBEANS_MODULE_ERROR = new LogConfigType().jinit_LogConfigType_2("NetBeans Module Error", this.NO_DESCRIPTION);
    this.FACTORYERROR = new LogConfigType().jinit_LogConfigType_2("General Factory Error", this.NO_DESCRIPTION);
    this.FILE = new LogConfigType().jinit_LogConfigType_2("File", this.NO_DESCRIPTION);
    this.FILEERROR = new LogConfigType().jinit_LogConfigType_2("File Error", this.NO_DESCRIPTION);
    this.HTTP = new LogConfigType().jinit_LogConfigType_2("HTTP", this.NO_DESCRIPTION);
    this.HTTPERROR = new LogConfigType().jinit_LogConfigType_2("HTTP Error", this.NO_DESCRIPTION);
    this.HTTPREQUEST = new LogConfigType().jinit_LogConfigType_2("Http Request", this.NO_DESCRIPTION);
    this.HTTPREQUESTERROR = new LogConfigType().jinit_LogConfigType_2("Http Request Error", this.NO_DESCRIPTION);
    this.IDLOGGING = new LogConfigType().jinit_LogConfigType_2("ID Logging", this.NO_DESCRIPTION);
    this.JSPEXTRAOUTPUT = new LogConfigType().jinit_LogConfigType_2("JSP Extra Output", this.NO_DESCRIPTION);
    this.JSPTAGEXTRAOUTPUT = new LogConfigType().jinit_LogConfigType_2("JSP Tag Extra Output", this.NO_DESCRIPTION);
    this.JSPTAG = new LogConfigType().jinit_LogConfigType_2("JSP Tag", this.NO_DESCRIPTION);
    this.JSPTAGERROR = new LogConfigType().jinit_LogConfigType_2("JSP Tag Error", this.NO_DESCRIPTION);
    this.LICENSING = new LogConfigType().jinit_LogConfigType_2("Licensing", this.NO_DESCRIPTION);
    this.LICENSINGERROR = new LogConfigType().jinit_LogConfigType_2("Licensing Error", this.NO_DESCRIPTION);
    this.LOADER = new LogConfigType().jinit_LogConfigType_2("Loader", this.NO_DESCRIPTION);
    this.LOADERERROR = new LogConfigType().jinit_LogConfigType_2("Loader Error", this.NO_DESCRIPTION);
    this.OS = new LogConfigType().jinit_LogConfigType_2("OS", this.NO_DESCRIPTION);
    this.OSERROR = new LogConfigType().jinit_LogConfigType_2("OS Error", this.NO_DESCRIPTION);
    this.PAYMENT = new LogConfigType().jinit_LogConfigType_2("Payment", this.NO_DESCRIPTION);
    this.PAYMENTERROR = new LogConfigType().jinit_LogConfigType_2("Payment Error", this.NO_DESCRIPTION);
    this.PRELOADER = new LogConfigType().jinit_LogConfigType_2("PreLoader", this.NO_DESCRIPTION);
    this.PRELOADERERROR = new LogConfigType().jinit_LogConfigType_2("PreLoader Error", this.NO_DESCRIPTION);
    this.PRODUCTSEARCHLOGGING = new LogConfigType().jinit_LogConfigType_2("Product Search Logging", this.NO_DESCRIPTION);
    this.PRODUCTSEARCHLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("Product Search Logging Error", this.NO_DESCRIPTION);
    this.SERVLET = new LogConfigType().jinit_LogConfigType_2("Servlet", this.NO_DESCRIPTION);
    this.SERVLETERROR = new LogConfigType().jinit_LogConfigType_2("Servlet Error", this.NO_DESCRIPTION);
    this.SHIPPINGERROR = new LogConfigType().jinit_LogConfigType_2("Shipping Error", this.NO_DESCRIPTION);
    this.SQLLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("SQL Error", this.NO_DESCRIPTION);
    this.SQLLOGGING = new LogConfigType().jinit_LogConfigType_2("SQL Logging", this.NO_DESCRIPTION);
    this.SQLTAGS = new LogConfigType().jinit_LogConfigType_2("SQL Tag Logging", this.NO_DESCRIPTION);
    this.SQLTAGSERROR = new LogConfigType().jinit_LogConfigType_2("SQL Tag Error", this.NO_DESCRIPTION);
    this.STYLE = new LogConfigType().jinit_LogConfigType_2("Style", this.NO_DESCRIPTION);
    this.STYLEERROR = new LogConfigType().jinit_LogConfigType_2("Style Error", this.NO_DESCRIPTION);
    this.TAGHELPER = new LogConfigType().jinit_LogConfigType_2("Tag Helper", this.NO_DESCRIPTION);
    this.TAGHELPERERROR = new LogConfigType().jinit_LogConfigType_2("Tag Helper Error", this.NO_DESCRIPTION);
    this.TAGHELPERFACTORY = new LogConfigType().jinit_LogConfigType_2("Tag Helper Factory", this.NO_DESCRIPTION);
    this.TAGHELPERFACTORYERROR = new LogConfigType().jinit_LogConfigType_2("Tag Helper Factory Error", this.NO_DESCRIPTION);
    this.TAX = new LogConfigType().jinit_LogConfigType_2("Tax", this.NO_DESCRIPTION);
    this.TAXERROR = new LogConfigType().jinit_LogConfigType_2("Tax Error", this.NO_DESCRIPTION);
    this.VALIDATION = new LogConfigType().jinit_LogConfigType_2("Validation", this.NO_DESCRIPTION);
    this.VALIDATIONERROR = new LogConfigType().jinit_LogConfigType_2("Validation Error", this.NO_DESCRIPTION);
    this.VIEW = new LogConfigType().jinit_LogConfigType_2("View", this.NO_DESCRIPTION);
    this.VIEWERROR = new LogConfigType().jinit_LogConfigType_2("View Error", this.NO_DESCRIPTION);
    this.VIEWFACTORYERROR = new LogConfigType().jinit_LogConfigType_2("View Factory Error", this.NO_DESCRIPTION);
    this.WORKFLOW = new LogConfigType().jinit_LogConfigType_2("Workflow", this.NO_DESCRIPTION);
    this.WORKFLOWERROR = new LogConfigType().jinit_LogConfigType_2("Workflow Error", this.NO_DESCRIPTION);
    this.XMLLOGGING = new LogConfigType().jinit_LogConfigType_2("XML Logging", this.NO_DESCRIPTION);
    this.XMLLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("XML Logging Error", this.NO_DESCRIPTION);
    this.XSLLOGGING = new LogConfigType().jinit_LogConfigType_2("XSL Logging", this.NO_DESCRIPTION);
    this.XSLLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("XSL Logging Error", this.NO_DESCRIPTION);
    this.REPLACE = new LogConfigType().jinit_LogConfigType_2("Replace", this.NO_DESCRIPTION);
    this.REPLACE_INFO = new LogConfigType().jinit_LogConfigType_2("Replace Info", this.NO_DESCRIPTION);
    this.REPLACEERROR = new LogConfigType().jinit_LogConfigType_2("Replace Error", this.NO_DESCRIPTION);
    this.SQLLOGGINGPOOL = new LogConfigType().jinit_LogConfigType_2("SQL Pool", this.NO_DESCRIPTION);
    this.SQLLOGGINGPOOLERROR = new LogConfigType().jinit_LogConfigType_2("SQL Pool Error", this.NO_DESCRIPTION);
    this.STATICPAGEGENERATIONLOGGING = new LogConfigType().jinit_LogConfigType_2("Static Page Generation Logging", this.NO_DESCRIPTION);
    this.STATICPAGEGENERATIONLOGGINGERROR = new LogConfigType().jinit_LogConfigType_2("Static Page Generation Logging Error", this.NO_DESCRIPTION);
    }
    

    static getInstance(): LogConfigTypeFactory | null {
        return LogConfigTypeFactory.instance;
    }
    

    jinit_LogConfigTypeFactory_0(): LogConfigTypeFactory {
        super.jinit_JObject_0();
        this.jfields_LogConfigTypeFactory();
        PreLogUtil.put("FreeBlisket", this, CommonStrings.getInstance()!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
}

