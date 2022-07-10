import {itemReceive} from './itemReceive.js'

export function reqArr(e)
{
  const reqArray = e
  .keys ()
  .reduce ( ( event, path ) => {
    event[path] = e ( path )
    return event
  }, []);
  itemReceive(reqArray)
  console.log(reqArray)
}

