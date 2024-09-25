"use client"

import React from 'react'
import HomePage from './celtable'


const page = () => {
  return (
    <div className="background">
      <div className="grid grid-cols-3 gap-4 pt-16 mb-12">
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">Atlantic</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Boston Celtics</h4>
              <h4 className='pl-2'>New Jersey Nets</h4>
              <h4 className='pl-2'>Philadelphia 76ers</h4>
              <h4 className='pl-2'>New York Knicks</h4>
              <h4 className='pl-2'>Toronto Raptors</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">Central</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Chicago Bulls</h4>
              <h4 className='pl-2'>Cleveland Cavaliers</h4>
              <h4 className='pl-2'>Detriot Pistons</h4>
              <h4 className='pl-2'>Indiana Pacers</h4>
              <h4 className='pl-2'>Milwaukee Bucks</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">SouthEast</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Atlanta Hawks</h4>
              <h4 className='pl-2'>Charlotte Hornets</h4>
              <h4 className='pl-2'>Miami Heat</h4>
              <h4 className='pl-2'>Orlando Magic</h4>
              <h4 className='pl-2'>Washington Wizards</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">NorthWest</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Denver Nuggets</h4>
              <h4 className='pl-2'>Minnesota Timberwolves</h4>
              <h4 className='pl-2'>Oklahoma City THunder</h4>
              <h4 className='pl-2'>Portland Trail Blazers</h4>
              <h4 className='pl-2'>Utah Jazz</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">Pacific</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Golden State Warriors</h4>
              <h4 className='pl-2'>Los Angeles Clippers</h4>
              <h4 className='pl-2'>Los Angeles Lakers</h4>
              <h4 className='pl-2'>Phoenix Suns</h4>
              <h4 className='pl-2'>Sacramento Kings</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">SouthWest</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Dallas Mavericks</h4>
              <h4 className='pl-2'>Houston Rockets</h4>
              <h4 className='pl-2'>Memphis Grizzlies</h4>
              <h4 className='pl-2'>New Orleans Pelicans</h4>
              <h4 className='pl-2'>San Antonio Spurs</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">Insights</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Draft Data</h4>
              <h4 className='pl-2'>Scoring Data</h4>
              <h4 className='pl-2'>Assist Data</h4>
              <h4 className='pl-2'>Fun Data</h4>
              <h4 className='pl-2'>NBA Data</h4>
              <h4 className='pl-2'>Position Data</h4>
              <h4 className='pl-2'>School/Birth Data</h4>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default page
