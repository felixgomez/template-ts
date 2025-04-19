import { describe, it, expect } from 'vitest'
import { Greeter } from '../src/Greeter'

describe('Greeter', () => {
  it('should return a greeting message', () => {
    const greeter = new Greeter('World')
    const message = greeter.sayHello()
    expect(message).toEqual('Hello, World!')
  })
})
