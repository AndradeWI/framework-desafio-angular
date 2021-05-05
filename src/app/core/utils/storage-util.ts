export class StorageUtil {

  public static(key: string, dados: any): void {
    const dadosStorage = btoa(JSON.stringify(dados));
    window.sessionStorage.setItem(key, dadosStorage);
  }
  public static get(key: string): any {
    return window.sessionStorage.getItem(key) ? JSON.parse(atob(sessionStorage.getItem(key))) : null;
  }
  public static remove(key: string): any {
    return window.sessionStorage.removeItem(key);
  }
}
