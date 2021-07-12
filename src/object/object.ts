export default function objectSample() {
  //     const a: object = {
  //         name: 'hojojo',
  //         age: 25
  //     }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const yuki: {
    age: 25
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 25,
    lastName: 'Hojo',
    firstName: 'Yuki',
  }
  ;(yuki.gender = 'male'), (yuki.lastName = 'ichinomiya')
  //     yuki.firstName = 'seichiryou'

  console.log('Object object sample 3:', yuki)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  ;(capitals.China = 'Beijing'), (capitals.Canada = 'Ottawa')

  console.log('Object object sample 4:', capitals)
}
