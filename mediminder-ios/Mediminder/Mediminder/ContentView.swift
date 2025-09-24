//
//  ContentView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI

struct ContentView: View {
    @State private var selection = 0
    
    var body: some View {
        TabView(selection: $selection) {
            Tab("Recordatorios", systemImage: "house.fill", value: 0) {
                RemindersView()
            }
            Tab("Perfil", systemImage: "person.fill", value: 1) {
                ProfileView()
            }
        }
    }
}

#Preview {
    ContentView()
}
