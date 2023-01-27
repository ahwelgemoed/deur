export const GATE_PREFIX = ' ';
class Gates {
  private gates: string[] = [];
  constructor() {
    this.gates = [];
  }

  public addClient(id: string) {
    this.gates.push(id);
  }

  public removeClient(id: string) {
    this.gates = this.gates.filter((gate) => gate !== id);
  }

  public getGates() {
    return this.gates;
  }
}

export const gates = new Gates();
