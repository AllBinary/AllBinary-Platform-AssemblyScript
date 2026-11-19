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
// package org.allbinary.business.user.commerce.money.payment.gateway

@global export class PaymentGatewayData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData";
    }
    static readonly CRYPTNUM: i32 = 5;
    @lazy static jv_ID: PaymentGatewayData | null = null;
    @lazy static js_ID: bool = false;
    static get ID(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_ID) {
            PaymentGatewayData.js_ID = true;
            PaymentGatewayData.jv_ID = new PaymentGatewayData().jinit_PaymentGatewayData_1("PAYMENTGATEWAY_ID");
        }
        return PaymentGatewayData.jv_ID;
    }
    static set ID(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_ID = true;
        PaymentGatewayData.jv_ID = value;
    }
    @lazy static jv_NAME: PaymentGatewayData | null = null;
    @lazy static js_NAME: bool = false;
    static get NAME(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_NAME) {
            PaymentGatewayData.js_NAME = true;
            PaymentGatewayData.jv_NAME = new PaymentGatewayData().jinit_PaymentGatewayData_1("PAYMENTGATEWAY_NAME");
        }
        return PaymentGatewayData.jv_NAME;
    }
    static set NAME(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_NAME = true;
        PaymentGatewayData.jv_NAME = value;
    }
    @lazy static jv_VALUE: PaymentGatewayData | null = null;
    @lazy static js_VALUE: bool = false;
    static get VALUE(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_VALUE) {
            PaymentGatewayData.js_VALUE = true;
            PaymentGatewayData.jv_VALUE = new PaymentGatewayData().jinit_PaymentGatewayData_1("PAYMENTGATEWAY_VALUE");
        }
        return PaymentGatewayData.jv_VALUE;
    }
    static set VALUE(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_VALUE = true;
        PaymentGatewayData.jv_VALUE = value;
    }
    @lazy static jv_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE: PaymentGatewayData | null = null;
    @lazy static js_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE: bool = false;
    static get PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE) {
            PaymentGatewayData.js_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE = true;
            PaymentGatewayData.jv_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE = new PaymentGatewayData().jinit_PaymentGatewayData_1("PAYMENTGATEWAY_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE");
        }
        return PaymentGatewayData.jv_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE;
    }
    static set PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE = true;
        PaymentGatewayData.jv_PAYMENTTRANSACTIONINTERFACEFACTORYINTERFACE = value;
    }
    @lazy static jv_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE: PaymentGatewayData | null = null;
    @lazy static js_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE: bool = false;
    static get PAYMENTPROCESSORINTERFACEFACTORYINTERFACE(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE) {
            PaymentGatewayData.js_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE = true;
            PaymentGatewayData.jv_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE = new PaymentGatewayData().jinit_PaymentGatewayData_1("PAYMENTGATEWAY_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE");
        }
        return PaymentGatewayData.jv_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE;
    }
    static set PAYMENTPROCESSORINTERFACEFACTORYINTERFACE(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE = true;
        PaymentGatewayData.jv_PAYMENTPROCESSORINTERFACEFACTORYINTERFACE = value;
    }
    @lazy static jv_MODE: PaymentGatewayData | null = null;
    @lazy static js_MODE: bool = false;
    static get MODE(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_MODE) {
            PaymentGatewayData.js_MODE = true;
            PaymentGatewayData.jv_MODE = new PaymentGatewayData().jinit_PaymentGatewayData_1("MODE");
        }
        return PaymentGatewayData.jv_MODE;
    }
    static set MODE(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_MODE = true;
        PaymentGatewayData.jv_MODE = value;
    }
    @lazy static jv_SERVERPROTOCOL: PaymentGatewayData | null = null;
    @lazy static js_SERVERPROTOCOL: bool = false;
    static get SERVERPROTOCOL(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SERVERPROTOCOL) {
            PaymentGatewayData.js_SERVERPROTOCOL = true;
            PaymentGatewayData.jv_SERVERPROTOCOL = new PaymentGatewayData().jinit_PaymentGatewayData_1("SERVERPROTOCOL");
        }
        return PaymentGatewayData.jv_SERVERPROTOCOL;
    }
    static set SERVERPROTOCOL(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SERVERPROTOCOL = true;
        PaymentGatewayData.jv_SERVERPROTOCOL = value;
    }
    @lazy static jv_SERVER: PaymentGatewayData | null = null;
    @lazy static js_SERVER: bool = false;
    static get SERVER(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SERVER) {
            PaymentGatewayData.js_SERVER = true;
            PaymentGatewayData.jv_SERVER = new PaymentGatewayData().jinit_PaymentGatewayData_1("SERVER");
        }
        return PaymentGatewayData.jv_SERVER;
    }
    static set SERVER(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SERVER = true;
        PaymentGatewayData.jv_SERVER = value;
    }
    @lazy static jv_SERVERPORT: PaymentGatewayData | null = null;
    @lazy static js_SERVERPORT: bool = false;
    static get SERVERPORT(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SERVERPORT) {
            PaymentGatewayData.js_SERVERPORT = true;
            PaymentGatewayData.jv_SERVERPORT = new PaymentGatewayData().jinit_PaymentGatewayData_1("SERVERPORT");
        }
        return PaymentGatewayData.jv_SERVERPORT;
    }
    static set SERVERPORT(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SERVERPORT = true;
        PaymentGatewayData.jv_SERVERPORT = value;
    }
    @lazy static jv_SERVERPATH: PaymentGatewayData | null = null;
    @lazy static js_SERVERPATH: bool = false;
    static get SERVERPATH(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SERVERPATH) {
            PaymentGatewayData.js_SERVERPATH = true;
            PaymentGatewayData.jv_SERVERPATH = new PaymentGatewayData().jinit_PaymentGatewayData_1("SERVERPATH");
        }
        return PaymentGatewayData.jv_SERVERPATH;
    }
    static set SERVERPATH(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SERVERPATH = true;
        PaymentGatewayData.jv_SERVERPATH = value;
    }
    @lazy static jv_TESTPROTOCOL: PaymentGatewayData | null = null;
    @lazy static js_TESTPROTOCOL: bool = false;
    static get TESTPROTOCOL(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_TESTPROTOCOL) {
            PaymentGatewayData.js_TESTPROTOCOL = true;
            PaymentGatewayData.jv_TESTPROTOCOL = new PaymentGatewayData().jinit_PaymentGatewayData_1("TESTSERVERPROTOCOL");
        }
        return PaymentGatewayData.jv_TESTPROTOCOL;
    }
    static set TESTPROTOCOL(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_TESTPROTOCOL = true;
        PaymentGatewayData.jv_TESTPROTOCOL = value;
    }
    @lazy static jv_TESTSERVER: PaymentGatewayData | null = null;
    @lazy static js_TESTSERVER: bool = false;
    static get TESTSERVER(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_TESTSERVER) {
            PaymentGatewayData.js_TESTSERVER = true;
            PaymentGatewayData.jv_TESTSERVER = new PaymentGatewayData().jinit_PaymentGatewayData_1("TESTSERVER");
        }
        return PaymentGatewayData.jv_TESTSERVER;
    }
    static set TESTSERVER(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_TESTSERVER = true;
        PaymentGatewayData.jv_TESTSERVER = value;
    }
    @lazy static jv_TESTPORT: PaymentGatewayData | null = null;
    @lazy static js_TESTPORT: bool = false;
    static get TESTPORT(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_TESTPORT) {
            PaymentGatewayData.js_TESTPORT = true;
            PaymentGatewayData.jv_TESTPORT = new PaymentGatewayData().jinit_PaymentGatewayData_1("TESTPORT");
        }
        return PaymentGatewayData.jv_TESTPORT;
    }
    static set TESTPORT(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_TESTPORT = true;
        PaymentGatewayData.jv_TESTPORT = value;
    }
    @lazy static jv_TESTPATH: PaymentGatewayData | null = null;
    @lazy static js_TESTPATH: bool = false;
    static get TESTPATH(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_TESTPATH) {
            PaymentGatewayData.js_TESTPATH = true;
            PaymentGatewayData.jv_TESTPATH = new PaymentGatewayData().jinit_PaymentGatewayData_1("TESTSERVERPATH");
        }
        return PaymentGatewayData.jv_TESTPATH;
    }
    static set TESTPATH(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_TESTPATH = true;
        PaymentGatewayData.jv_TESTPATH = value;
    }
    @lazy static jv_TIMEOUT: PaymentGatewayData | null = null;
    @lazy static js_TIMEOUT: bool = false;
    static get TIMEOUT(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_TIMEOUT) {
            PaymentGatewayData.js_TIMEOUT = true;
            PaymentGatewayData.jv_TIMEOUT = new PaymentGatewayData().jinit_PaymentGatewayData_1("TIMEOUT");
        }
        return PaymentGatewayData.jv_TIMEOUT;
    }
    static set TIMEOUT(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_TIMEOUT = true;
        PaymentGatewayData.jv_TIMEOUT = value;
    }
    @lazy static jv_PROXYPROTOCOL: PaymentGatewayData | null = null;
    @lazy static js_PROXYPROTOCOL: bool = false;
    static get PROXYPROTOCOL(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYPROTOCOL) {
            PaymentGatewayData.js_PROXYPROTOCOL = true;
            PaymentGatewayData.jv_PROXYPROTOCOL = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYPROTOCOL");
        }
        return PaymentGatewayData.jv_PROXYPROTOCOL;
    }
    static set PROXYPROTOCOL(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYPROTOCOL = true;
        PaymentGatewayData.jv_PROXYPROTOCOL = value;
    }
    @lazy static jv_PROXYSERVER: PaymentGatewayData | null = null;
    @lazy static js_PROXYSERVER: bool = false;
    static get PROXYSERVER(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYSERVER) {
            PaymentGatewayData.js_PROXYSERVER = true;
            PaymentGatewayData.jv_PROXYSERVER = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYSERVER");
        }
        return PaymentGatewayData.jv_PROXYSERVER;
    }
    static set PROXYSERVER(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYSERVER = true;
        PaymentGatewayData.jv_PROXYSERVER = value;
    }
    @lazy static jv_PROXYPATH: PaymentGatewayData | null = null;
    @lazy static js_PROXYPATH: bool = false;
    static get PROXYPATH(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYPATH) {
            PaymentGatewayData.js_PROXYPATH = true;
            PaymentGatewayData.jv_PROXYPATH = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYPATH");
        }
        return PaymentGatewayData.jv_PROXYPATH;
    }
    static set PROXYPATH(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYPATH = true;
        PaymentGatewayData.jv_PROXYPATH = value;
    }
    @lazy static jv_PROXYUSERNAME: PaymentGatewayData | null = null;
    @lazy static js_PROXYUSERNAME: bool = false;
    static get PROXYUSERNAME(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYUSERNAME) {
            PaymentGatewayData.js_PROXYUSERNAME = true;
            PaymentGatewayData.jv_PROXYUSERNAME = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYUSERNAME");
        }
        return PaymentGatewayData.jv_PROXYUSERNAME;
    }
    static set PROXYUSERNAME(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYUSERNAME = true;
        PaymentGatewayData.jv_PROXYUSERNAME = value;
    }
    @lazy static jv_PROXYPASSWORD: PaymentGatewayData | null = null;
    @lazy static js_PROXYPASSWORD: bool = false;
    static get PROXYPASSWORD(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYPASSWORD) {
            PaymentGatewayData.js_PROXYPASSWORD = true;
            PaymentGatewayData.jv_PROXYPASSWORD = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYPASSWORD");
        }
        return PaymentGatewayData.jv_PROXYPASSWORD;
    }
    static set PROXYPASSWORD(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYPASSWORD = true;
        PaymentGatewayData.jv_PROXYPASSWORD = value;
    }
    @lazy static jv_PROXYPORT: PaymentGatewayData | null = null;
    @lazy static js_PROXYPORT: bool = false;
    static get PROXYPORT(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYPORT) {
            PaymentGatewayData.js_PROXYPORT = true;
            PaymentGatewayData.jv_PROXYPORT = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYPORT");
        }
        return PaymentGatewayData.jv_PROXYPORT;
    }
    static set PROXYPORT(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYPORT = true;
        PaymentGatewayData.jv_PROXYPORT = value;
    }
    @lazy static jv_PROXYTIMEOUT: PaymentGatewayData | null = null;
    @lazy static js_PROXYTIMEOUT: bool = false;
    static get PROXYTIMEOUT(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_PROXYTIMEOUT) {
            PaymentGatewayData.js_PROXYTIMEOUT = true;
            PaymentGatewayData.jv_PROXYTIMEOUT = new PaymentGatewayData().jinit_PaymentGatewayData_1("PROXYTIMEOUT");
        }
        return PaymentGatewayData.jv_PROXYTIMEOUT;
    }
    static set PROXYTIMEOUT(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_PROXYTIMEOUT = true;
        PaymentGatewayData.jv_PROXYTIMEOUT = value;
    }
    @lazy static jv_SPECIAL1: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL1: bool = false;
    static get SPECIAL1(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL1) {
            PaymentGatewayData.js_SPECIAL1 = true;
            PaymentGatewayData.jv_SPECIAL1 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL1");
        }
        return PaymentGatewayData.jv_SPECIAL1;
    }
    static set SPECIAL1(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL1 = true;
        PaymentGatewayData.jv_SPECIAL1 = value;
    }
    @lazy static jv_SPECIAL2: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL2: bool = false;
    static get SPECIAL2(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL2) {
            PaymentGatewayData.js_SPECIAL2 = true;
            PaymentGatewayData.jv_SPECIAL2 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL2");
        }
        return PaymentGatewayData.jv_SPECIAL2;
    }
    static set SPECIAL2(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL2 = true;
        PaymentGatewayData.jv_SPECIAL2 = value;
    }
    @lazy static jv_SPECIAL3: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL3: bool = false;
    static get SPECIAL3(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL3) {
            PaymentGatewayData.js_SPECIAL3 = true;
            PaymentGatewayData.jv_SPECIAL3 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL3");
        }
        return PaymentGatewayData.jv_SPECIAL3;
    }
    static set SPECIAL3(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL3 = true;
        PaymentGatewayData.jv_SPECIAL3 = value;
    }
    @lazy static jv_SPECIAL4: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL4: bool = false;
    static get SPECIAL4(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL4) {
            PaymentGatewayData.js_SPECIAL4 = true;
            PaymentGatewayData.jv_SPECIAL4 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL4");
        }
        return PaymentGatewayData.jv_SPECIAL4;
    }
    static set SPECIAL4(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL4 = true;
        PaymentGatewayData.jv_SPECIAL4 = value;
    }
    @lazy static jv_SPECIAL5: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL5: bool = false;
    static get SPECIAL5(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL5) {
            PaymentGatewayData.js_SPECIAL5 = true;
            PaymentGatewayData.jv_SPECIAL5 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL5");
        }
        return PaymentGatewayData.jv_SPECIAL5;
    }
    static set SPECIAL5(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL5 = true;
        PaymentGatewayData.jv_SPECIAL5 = value;
    }
    @lazy static jv_SPECIAL6: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL6: bool = false;
    static get SPECIAL6(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL6) {
            PaymentGatewayData.js_SPECIAL6 = true;
            PaymentGatewayData.jv_SPECIAL6 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL6");
        }
        return PaymentGatewayData.jv_SPECIAL6;
    }
    static set SPECIAL6(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL6 = true;
        PaymentGatewayData.jv_SPECIAL6 = value;
    }
    @lazy static jv_SPECIAL7: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL7: bool = false;
    static get SPECIAL7(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL7) {
            PaymentGatewayData.js_SPECIAL7 = true;
            PaymentGatewayData.jv_SPECIAL7 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL7");
        }
        return PaymentGatewayData.jv_SPECIAL7;
    }
    static set SPECIAL7(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL7 = true;
        PaymentGatewayData.jv_SPECIAL7 = value;
    }
    @lazy static jv_SPECIAL8: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL8: bool = false;
    static get SPECIAL8(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL8) {
            PaymentGatewayData.js_SPECIAL8 = true;
            PaymentGatewayData.jv_SPECIAL8 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL8");
        }
        return PaymentGatewayData.jv_SPECIAL8;
    }
    static set SPECIAL8(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL8 = true;
        PaymentGatewayData.jv_SPECIAL8 = value;
    }
    @lazy static jv_SPECIAL9: PaymentGatewayData | null = null;
    @lazy static js_SPECIAL9: bool = false;
    static get SPECIAL9(): PaymentGatewayData | null {
        if (!PaymentGatewayData.js_SPECIAL9) {
            PaymentGatewayData.js_SPECIAL9 = true;
            PaymentGatewayData.jv_SPECIAL9 = new PaymentGatewayData().jinit_PaymentGatewayData_1("SPECIAL9");
        }
        return PaymentGatewayData.jv_SPECIAL9;
    }
    static set SPECIAL9(value: PaymentGatewayData | null) {
        PaymentGatewayData.js_SPECIAL9 = true;
        PaymentGatewayData.jv_SPECIAL9 = value;
    }
    key: string | null = null;

    jfields_PaymentGatewayData(): void {
    
    }
    

    jinit_PaymentGatewayData_1(value: string | null): PaymentGatewayData {
        super.jinit_JObject_0();
        this.jfields_PaymentGatewayData();
        this.key = value;
        return this;
    }
    

    toString(): string | null {
        return this.key;
    }
}

