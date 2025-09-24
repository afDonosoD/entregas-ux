//
//  CreateReminderSheetStep2View.swift
//  Mediminder
//
//  Created by Germán Martínez Solano on 24/09/25.
//

import SwiftUI

struct CreateReminderSheetStep2View: View {
    @Binding var hours: [String]
    @Environment(\.presentationMode) var presentationMode
    
    let hoursAndDays: [(id: Int, hour: String, day: [(id: Int, dayName: String, colored: Bool)])]
    
    var onCancel: () -> Void
    var onNext: () -> Void
    
    
    var body: some View {
        NavigationStack {
            GeometryReader { geometry in
                VStack(spacing: 0) {
                    ScrollView {
                        VStack(spacing: 15) {
                            Group {
                                Text("¿Cómo es el horario?")
                                    .font(.headline)
                                    .frame(maxWidth: .infinity, alignment: .center)
                                
                                
                                VStack(alignment: .leading, spacing: 12) {
                                    // Encabezados en un HStack
                                    HStack {
                                        Text("Hora")
                                            .font(.subheadline)
                                            .foregroundStyle(.secondary)
                                            .frame(width: geometry.size.width / 4.6, alignment: .leading)
                                        
                                        Text("Días")
                                            .font(.subheadline)
                                            .foregroundStyle(.secondary)
                                            .frame(maxWidth: .infinity, alignment: .leading)
                                    }
                                    
                                    // Filas con TextField y DaysView alineados
                                    ForEach(Array(hoursAndDays.enumerated()), id: \.element.id) { index, hourAndDay in
                                        HStack() {
                                            TextField(hourAndDay.hour, text: $hours[index])
                                                .textFieldStyle(.plain)
                                                .padding(.horizontal, 8)
                                                .padding(.vertical)
                                                .background(Color(.secondarySystemBackground))
                                                .cornerRadius(12)
                                                .frame(width: geometry.size.width / 4.6,)
                                            
                                            DaysView(days: hourAndDay.day, showDeleteButton: true)
                                                .frame(maxWidth: .infinity, alignment: .leading)
                                        }
                                    }
                                    
                                    Button(action: {
                                    }) {
                                        Image(systemName: "plus.circle.fill")
                                            .foregroundStyle(.primary)
                                            .font(.system(size: 30))
                                    }
                                    .frame(width: geometry.size.width / 4.6)
                                    .padding(.top, 8)
                                }
                                
                            } // Group
                        }
                        .frame(minHeight: geometry.size.height * 0.85)
                        .frame(maxWidth: .infinity, alignment: .center)
                    }.padding(.horizontal, 8)
                    
                    HStack {
                        Button(role: .cancel) {
                            presentationMode.wrappedValue.dismiss()
                        } label: {
                            Text("Regresar")
                                .frame(maxWidth: .infinity)
                                .padding()
                                .foregroundColor(.black)
                                .background(Color(.secondaryLight))
                                .cornerRadius(50)
                        }
                        
                        Button {
                            onNext()
                        } label: {
                            Text("Siguiente")
                                .frame(maxWidth: .infinity)
                                .padding()
                                .foregroundColor(.white)
                                .background(Color(.primary))
                                .cornerRadius(50)
                        }
                    }
                    .padding()
                    .background(Color(.systemBackground))
                }
            }
            .navigationTitle("Nuevo Recordatorio")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button(role: .cancel) {
                        onCancel()
                    } label: {
                        Image(systemName: "xmark")
                    }
                }
            }
        }
    }
}

#Preview {
    CreateReminderSheetStep2View(
        hours: .constant(["","",""]),
        hoursAndDays: [(1, "9:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ]), (2, "10:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ]), (3, "11:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ])],
        onCancel: {},
        onNext: {}
    )
}
