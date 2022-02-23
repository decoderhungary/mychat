const MyStorage={
    local: {
        get(key){
            return JSON.parse(localStorage.getItem(`mychat/storage/${key}`) || 'null');
        },
        put(key, value){
            return localStorage.setItem(`mychat/storage/${key}`, JSON.stringify(value));
        },
        remove(key){
            return localStorage.removeItem(`mychat/storage/${key}`);
        }
    },
    session: {
        get(key){
            return JSON.parse(sessionStorage.getItem(`mychat/storage/${key}`) || 'null');
        },
        put(key, value){
            return sessionStorage.setItem(`mychat/storage/${key}`, JSON.stringify(value));
        },
        remove(key){
            return sessionStorage.removeItem(`mychat/storage/${key}`);
        }
    }
}

export default MyStorage;