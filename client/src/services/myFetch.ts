export default function rest<T>(url: string): Promise<T> {
  return fetch(url).then((res) => {
        if (!res.ok) {
          res.text().then((text) => {
            throw new Error(text)
          })
        }
        return res.json() as Promise<T>;
    })
}
