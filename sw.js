    self.addEventListener('fetch', () => {});
    ```

### Kako provjeriti radi li sada?
Ako nakon dodavanja `manifest.json` i `sw.js` datoteke i dalje ne vidiš opciju "Instaliraj":

1.  **Na Androidu (Chrome):** Klikni tri točkice -> **"Dodaj na početni zaslon"**. Ako se zove "Dodaj na početni zaslon", to je to. Ako piše **"Instaliraj aplikaciju"**, to je još bolje.
2.  **Na iPhoneu (Safari):** Safari **neće** reći "Instaliraj". Moraš kliknuti na **Share (Dijeli)** -> **"Add to Home Screen" (Dodaj na početni zaslon)**. iPhone će sam stvoriti ikonicu i otvoriti aplikaciju u "standalone" modu (bez adresne trake).

**Savjet za testiranje:**
Otvori link u **Incognito (Privatnom)** modu na mobitelu. Ako ti se tamo ne nudi instalacija, znači da GitHub još nije "pročitao" tvoj manifest.

Probaj dodati te dvije datoteke (`manifest.json` i `sw.js`), pa mi javi jesi li dobio ikonicu!
