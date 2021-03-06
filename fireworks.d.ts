declare class Fireworks {
  constructor(container: HTMLElement, options?: Fireworks.FireworksOptions)
  destroy(): void
  start(): () => void
  stop(): void
  kill(): void
  fire(): void
  update(): void
  setSize(width: number, height: number): void
  resetSize(): void
}

declare namespace Fireworks {
  export type FireworksOptions = {
    maxRockets?: number
    numParticles?: number
    explosionMinHeight?: number
    explosionMaxHeight?: number
    explosionChance?: number
    rocketSpawnInterval?: number
  }
}

export = Fireworks

export as namespace Fireworks
