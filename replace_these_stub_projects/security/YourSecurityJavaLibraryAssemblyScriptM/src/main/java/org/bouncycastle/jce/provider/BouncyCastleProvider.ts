// Generated Code Do Not Modify
// package org.bouncycastle.jce.provider
// import java.security.Provider

@global export class BouncyCastleProvider extends JProvider {

    jclassName(): string {
        return "org.bouncycastle.jce.provider.BouncyCastleProvider";
    }
    @lazy static info: string | null = "BouncyCastle Security Provider v1.41";
    @lazy static PROVIDER_NAME: string | null = "BC";
    

    jinit_BouncyCastleProvider_0(): BouncyCastleProvider {
        super.jinit_JProvider_3(BouncyCastleProvider.PROVIDER_NAME, 1.41, BouncyCastleProvider.info);
        return this;
    }
    

    setParameter(parameterName: string | null, parameter: Object | null): void {
    }
}

