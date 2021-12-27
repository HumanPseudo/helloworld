import* as vsls from 'vsls';

async function getVsls() {

    const liveshare = await vsls.getApi();

    return liveshare;
    
}

export {getVsls};