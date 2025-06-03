exports.getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // mês começa do 0
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`; // formato: YYYY-MM-DD
}