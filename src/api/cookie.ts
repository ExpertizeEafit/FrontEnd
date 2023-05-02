
export const setCookie = (key:string, value:string, expires:number) => {
    const expiration = new Date(new Date().getTime() + expires * 100000)

    document.cookie = `${key}=${value}; expires=${expiration}; path=/`
}

export const getCookie = (name:string) => {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
  
    return null;
}