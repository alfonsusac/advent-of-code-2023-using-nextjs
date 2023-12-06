export default async function Page() {
  return <div style={ {
    display: 'flex',
    flexDirection: 'column',
  }}>
    Hello World
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(d => (
        <section key={ d }>
          <br />
          <a href={`/day${d}`}>day{d}</a> <br/>
          <a href={`/day${d}b`}>day{d}b</a>
        </section>
      ))
    }


  </div>
}