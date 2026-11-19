/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.apache.xmlrpc
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.NullUtil

@global export class NullXmlRpcHandler extends JObject implements XmlRpcHandler {

    jclassName(): string {
        return "org.apache.xmlrpc.NullXmlRpcHandler";
    }
    @lazy static jv_NULL_XML_RPC_HANDLER: NullXmlRpcHandler | null = null;
    @lazy static js_NULL_XML_RPC_HANDLER: bool = false;
    static get NULL_XML_RPC_HANDLER(): NullXmlRpcHandler | null {
        if (!NullXmlRpcHandler.js_NULL_XML_RPC_HANDLER) {
            NullXmlRpcHandler.js_NULL_XML_RPC_HANDLER = true;
            NullXmlRpcHandler.jv_NULL_XML_RPC_HANDLER = new NullXmlRpcHandler().jinit_NullXmlRpcHandler_0();
        }
        return NullXmlRpcHandler.jv_NULL_XML_RPC_HANDLER;
    }
    static set NULL_XML_RPC_HANDLER(value: NullXmlRpcHandler | null) {
        NullXmlRpcHandler.js_NULL_XML_RPC_HANDLER = true;
        NullXmlRpcHandler.jv_NULL_XML_RPC_HANDLER = value;
    }

    jinit_NullXmlRpcHandler_0(): NullXmlRpcHandler {
        super.jinit_JObject_0();
        return this;
    }
    

    execute(method: string | null, params: BasicArrayList | null): Object | null {
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
}

