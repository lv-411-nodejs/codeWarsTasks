module.exports = {
    lockerRun: (lockers) => {
        let open = [];
        for (let i = 1; i * i <= lockers; i++) {
            open.push(i * i);
        }
        return open;
    }
};
