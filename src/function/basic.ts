//アロー時間数
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message)
}

//名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message)
}

//関数式
export function logMessage3(message: string): void {
  console.log('Function basic sample 3:', message)
}

//アロー関数の省略記法
export const logMessage4 = (message: string) => console.log('Function basic sample 4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 飛び出しシグネチャ（省略記法）
type LongMessage = (message: string) => void
export const logMessage6: LongMessage = (message) => {
  console.log('Function basic sample 6:', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('Function basic sample 7:', message)
}
