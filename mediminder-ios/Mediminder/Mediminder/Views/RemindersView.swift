//
//  RemindersView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI

struct RemindersView: View {
    
    @State private var isShowingSheet = false
    @State private var medicine = ""
    @State private var quantity = ""
    @State private var measure = ""
    
    var body: some View {
        GeometryReader { proxy in
            VStack {
                HStack {
                    Spacer()
                    
                    VStack(alignment: .trailing) {
                        Text("Domingo\nSeptiembre 14")
                            .customTitle()
                            .padding(.bottom, 16)
                        
                        Text("¡Buenos días, Mary!")
                            .customTitle2()
                            .padding(.bottom, 8)
                        
                        Text("Hoy **no tienes** medicinas pendientes por tomar")
                            .customTitle2()
                    }
                    .multilineTextAlignment(.trailing)
                    .frame(maxWidth: proxy.size.width / 1.618, alignment: .trailing)
                }
                .padding(.trailing, 16)
                .padding(.bottom, 22)
                
                CalendarView()
                    .padding(.horizontal, 35)
                
                ContentUnavailableView {
                    VStack(spacing: 12) {
                        Image(systemName: "pills.fill")
                            .foregroundStyle(.secondary)
                            .font(.custom("SF Pro Rounded", size: 40))
                        
                        Text("¡No hay pastillas para tomar por hoy!")
                            .customBody()
                            .fontWeight(.bold)
                            .foregroundStyle(.secondary)
                        
                        Text("Para registrar más recordatorios haz click en el botón \"+\"")
                            .customBody()
                            .foregroundStyle(.secondary)
                    }
                }
                
                Spacer()
            }
            .safeAreaInset(edge: .bottom) {
                HStack {
                    Spacer()
                    
                    Button(action: { isShowingSheet.toggle() }) {
                        Image(systemName: "plus")
                            .font(.system(size: 20))
                            .foregroundStyle(.white)
                    }
                    .frame(width: 40, height: 40)
                    .background(Color.accent)
                    .clipShape(Circle())
                    .shadow(color: Color(red: 0, green: 0.27, blue: 0.62).opacity(0.3), radius: 5, x: 0, y: 4)
                    .sheet(isPresented: $isShowingSheet, onDismiss: didDismiss) {
                        CreateReminderSheetView(
                            medicine: $medicine,
                            quantity: $quantity,
                            measure: $measure,
                            onCancel: {
                                isShowingSheet = false
                            },
                            onNext: {
                            }
                        )
                    }
                }
                .padding(.trailing, 16)
            }
            .background {
                GeometryReader { proxy in
                    Image(.day)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: proxy.size.width / 1.5)
                }
                .ignoresSafeArea()
            }
        }
    }
    
    func didDismiss() {
        // Acción al cerrar el sheet si es necesario
    }
}

#Preview {
    RemindersView()
        .environment(\.font, .system(size: 16, design: .rounded))
}

