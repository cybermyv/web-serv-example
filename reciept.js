class Reciept {
    constructor(vol = 10, vg = 70, pg = 30, n = 3) {
        this.id = 0;
        this.name = 'Рецепт1';
        this.tag = '';
        this.vol = vol;
        this.vg = vg;
        this.pg = pg;
        this.n = n;
        this.aromas = [];
    }

    setReciept(id, name, tag, vol = 10, vg = 70, pg = 30, n = 1) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.vol = vol;
        this.vg = vg;
        this.pg = pg;
        this.n = n;
    }

    getVolume() {
        return `Название - ${ this.name}, метка -${ this.tag},  Общий объем - ${this.vol} мл, VG- ${this.vg}%, PG- ${this.pg}%, никотин - ${this.n}мг`
    }

    setAroma(id, parent, aromaid, val = 0) {
        //--нужно проверить, есть ли такая аромка в массиве
        //-- значение val не могут быть меньше или равно нулю

        this.aromas.push({ id, parent, aromaid, val });
    }

    getAllAromas() {
        for (let i = 0; i < this.aromas.length; i++) {
            console.log(`Аромка №- ${i} - ${this.aromas[i].id} - количество - ${this.aromas[i].val}`);
        }
    }
};

export default Reciept;