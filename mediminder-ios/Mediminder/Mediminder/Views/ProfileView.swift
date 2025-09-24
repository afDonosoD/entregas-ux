//
//  RemindersView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI


struct ProfileView: View {
    var body: some View {
        VStack {
            HStack {
                VStack(alignment: .leading) {
                    Text("Mary Díaz")
                        .font(.title)
                        .foregroundStyle(Color(.primary))
                        .bold()
                        .padding(.horizontal, 16)
                    
                    Text(verbatim: "marydiaz@prueba.com")
                        .foregroundStyle(Color(.secondary))
                        .padding(.horizontal, 16)
                    
                }
                .multilineTextAlignment(.leading)
                
                Spacer()
            }
        }
        
        NavigationStack {
            List {
                NavigationLink(destination: ChangePasswordView()) {
                    Text("Cambio de clave")
                }
                .listRowSeparator(.hidden)
                Text("Cerrar sesión")
            }
            .scrollContentBackground(.hidden)
            .background(Color.white)
            .navigationBarHidden(true)
        }.background(Color.white)
        
    }
}

struct ChangePasswordView: View {
    var body: some View {
        VStack {
            Text("Cambio de clave")
                .foregroundColor(.primary)
                .font(.title)
                .padding()
        }
    }
}

#Preview {
    ProfileView()
        .fontDesign(.rounded)
}
