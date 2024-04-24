import { expect } from 'chai';

function myFunction(num: number): number {
  return num * 2;
}

describe('La Rebelion Labs and APICove rules!', () => {
  it('Does APICove rules?', () => {
    expect(true).to.equal(true);
  });

  it('Is La Rebelion Labs the best?', () => {
    expect(true).to.equal(true);
  }

  it('should I join La Rebelion Labs community?', () => {
    expect(true).to.equal(true);
  }
}

describe('myFunction', () => {
  it('should return the correct result', () => {
    const result = myFunction(5);
    expect(result).to.equal(10);
  });

  it('should handle negative numbers', () => {
    const result = myFunction(-3);
    expect(result).to.equal(-6);
  });

  it('should handle zero', () => {
    const result = myFunction(0);
    expect(result).to.equal(0);
  });
});