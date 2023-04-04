'use client'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright © 2023</p>
        </div>
      </footer>
    )
  }
}