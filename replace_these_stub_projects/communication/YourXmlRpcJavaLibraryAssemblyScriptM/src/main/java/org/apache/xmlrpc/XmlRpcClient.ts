// Generated Code Do Not Modify
// package org.apache.xmlrpc
// import java.io.IOException
// import java.net.MalformedURLException
// import java.net.URL
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.init.crypt.jcehelper.CryptInterface
// import org.allbinary.logic.NullUtil

@global export class XmlRpcClient extends JObject implements XmlRpcHandler {

    jclassName(): string {
        return "org.apache.xmlrpc.XmlRpcClient";
    }
    url: JURL | null = null;

    jfields_XmlRpcClient(): void {
    
    }
    

    jinit_XmlRpcClient_1(url: string | null): XmlRpcClient {
        super.jinit_JObject_0();
        this.jfields_XmlRpcClient();
        this.url = new JURL().jinit_JURL_1(url); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getURL(): JURL | null {
        return this.url;
    }
    

    setBasicAuthentication(user: string | null, password: string | null): void {
    }
    

    execute(method: string | null, params: BasicArrayList | null): Object | null {
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
    

    executeWithCrypt(method: string | null, params: BasicArrayList | null, cryptInterface: CryptInterface | null): Object | null {
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
}

